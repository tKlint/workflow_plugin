import parser from '@babel/parser';
import { traverse } from '@babel/core';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();
const { PWD, SAMPLE_CODE_PATH, FK_MAP_PATH } = process.env;
console.log(`${PWD}/${SAMPLE_CODE_PATH}`);
const code = fs.readFileSync(`${PWD}/${SAMPLE_CODE_PATH}`, {
  encoding: 'utf-8',
}).toString();

const ast = parser.parse(code, {
  plugins: [
    'javascript',
  ],
});

const optionTree = {

};

function matchOptionsTagValue(tag = '') {
  const noSpaceTagStr = tag.replaceAll(' ', '');
  const valueReg = /value='[0-9a-zA-Z]+'/;
  const result = noSpaceTagStr.match(valueReg);
  if (result) {
    return result[0].split('=')[1].replace(/'|"/g, '');
  }
  return '';
}

traverse(ast, {
  enter(path) {
    if (path.isIfStatement(path.node)) {
      const { left, operator, right } = path.node.test;
      const strictOperator = '===';
      const uinStrictOperator = '==';
      const allowPatterns = [
        `platform${strictOperator}`,
        `platform${uinStrictOperator}`,
      ];
      const currentIfStatement = `${left.name}${operator}`;
      if (allowPatterns.includes(currentIfStatement)) {
        const blockStatements = path.node.consequent.body;
        blockStatements.forEach((node) => {
          if (node.expression.left.name === 'contents') {
            const tagStart = node.expression.right.left.left.right.value;
            const innerText = node.expression.right.left.right.value;
            const value = matchOptionsTagValue(tagStart);
            if (optionTree[right.value]) {
              optionTree[right.value][innerText] = value;
            } else {
              optionTree[right.value] = {
                [innerText]: value,
              };
            }
          }
        });
      }
    }
  },
});

fs.writeFileSync(`${PWD}/${FK_MAP_PATH}`, JSON.stringify(optionTree));
