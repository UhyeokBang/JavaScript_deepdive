/* Person 생성자 함수에 의해 생성된 me 객체는 Object.prototype의 메서드인 hasOwnProperty를 호출할 수 있다.
이것은 me 객체가 PErson.prototype뿐만 아니라 Object.prototype도 상속받았다는 것을 의미한다.*/
function Person(name) {
    this.name = name;
  }
  
  // 프로토타입 메서드
  Person.prototype.sayHello = function () {
    console.log(`Hi! My name is ${this.name}`);
  };
  
  const me = new Person('Lee');
  
  // hasOwnProperty는 Object.prototype의 메서드다.
  console.log(me.hasOwnProperty('name')); // true