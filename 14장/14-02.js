var x = 'global';

function foo() {
  console.log(x); // ①
  var x = 'local';
  console.log(x);
}

foo();
console.log(x); // global