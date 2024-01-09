/*apply와 call 메서드의 본질적인 기능은 함수를 호출하는 것이다. apply와 call 메서드는 함수를 호출하면서
첫 번째 인수로 전달한 특정 객체를 호출한 함수의 this에 바인딩한다.*/
function getThisBinding() {
    return this;
  }
  
  // this로 사용할 객체
  const thisArg = { a: 1 };
  
  console.log(getThisBinding()); // window
  
  // getThisBinding 함수를 호출하면서 인수로 전달한 객체를 getThisBinding 함수의 this에 바인딩한다.
  console.log(getThisBinding.apply(thisArg)); // {a: 1}
  console.log(getThisBinding.call(thisArg)); // {a: 1}