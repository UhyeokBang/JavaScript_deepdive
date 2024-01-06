/*for...in 문은 객체의 프로토타입 체인 상에 존재하는 모든 프로토타입의 프로퍼티 중에서 프로퍼티 어트리뷰트 [[Enumerable]]의 값이
true인 프로퍼티를 순회하며 열거 한다.*/
 /*상속받은 프로퍼티는 제외하고 객체 자신의 프로퍼티만 열거하려면 Object.prototype.hasOwnProperty 메서드를 사용하여
  객체 자신의 프로퍼티인지 확인해야 한다.*/
const person = {
    name: 'Lee',
    address: 'Seoul',
    __proto__: { age: 20 }
  };
  
  for (const key in person) {
    console.log(key + ': ' + person[key]);
  }
  // name: Lee
  // address: Seoul
  // age: 20
  
 