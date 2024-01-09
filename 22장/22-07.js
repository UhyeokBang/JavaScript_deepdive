//기본적으로 this에는 전역 객체가 바인딩된다.
function foo() {
    console.log("foo's this: ", this);  // window
    function bar() {
      console.log("bar's this: ", this); // window
    }
    bar();
  }
  foo();