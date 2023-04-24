function foo() {
  console.log('foo run');
}
function bar() {
  console.log('bar run');
}
function baz() {
  console.log('baz run');
}

function initAction() {
  foo();
  setTimeout(() => {
    bar();
  }, 0);
  baz();
}
initAction();
