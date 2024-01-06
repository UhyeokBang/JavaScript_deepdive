//ES8에서 도입된 Object.entries 메서드는 객체 자신의 고유한 열거 가능한 프로퍼티 키와 값의 쌍의 배열을 배열에 담아 반환한다.
const person = {
    name: 'Lee',
    address: 'Seoul',
    __proto__: { age: 20 }
  };
console.log(Object.entries(person)); // [["name", "Lee"], ["address", "Seoul"]]

Object.entries(person).forEach(([key, value]) => console.log(key, value));
/*
name Lee
address Seoul
*/