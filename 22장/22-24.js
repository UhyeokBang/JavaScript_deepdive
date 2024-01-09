//콜백 함수의 내부의 this를 외부 함수 내부의 this와 일치시켜야 한다. 이때 bind 메서드를 사용하여 this를 일치시킬 수 있다.
const person = {
    name: 'Lee',
    foo(callback) {
      // bind 메서드로 callback 함수 내부의 this 바인딩을 전달
      setTimeout(callback.bind(this), 100);
    }
  };
  
  person.foo(function () {
    console.log(`Hi! my name is ${this.name}.`); // Hi! my name is Lee.
  });