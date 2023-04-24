console.log('start');
function foo() {
  return Promise.resolve(1).then(() => 2);
}
console.log('foo');
const a = foo();
console.log('a', a);
console.log('end');
