/*
객체 디스트럭처링 할당을 위한 변수에 기본값을 설정할 수 있다.
*/

const { firstName = 'Ungmo', lastName } = { lastName: 'Lee' };
console.log(firstName, lastName); // Ungmo Lee

const { firstName: fn = 'Ungmo', lastName: ln } = { lastName: 'Lee' };
console.log(fn, ln); // Ungmo Lee