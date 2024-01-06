//Object.keys 메서드는 객체 자신의 열거 가능한 프로퍼티 키를 배열로 반환한다. (객체 자신의 고유 프로퍼티 키만 열거한다.)
const person = {
    name: 'Lee',
    address: 'Seoul',
    __proto__: { age: 20 }
  };
  
  console.log(Object.keys(person)); // ["name", "address"]