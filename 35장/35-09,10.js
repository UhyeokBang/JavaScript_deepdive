/* 
2개의 배열을 1개의 배열로 결합하고 싶은 경우 concat 메서드 또는 스프레드 문법을 이용할 수 있다.
스프레드 문법을 사용 하는 경우가 훨씬 간단하다.
*/

// ES5 - concat 메서드를 사용하는 경우
var arr = [1, 2].concat([3, 4]);
console.log(arr); // [1, 2, 3, 4]

// ES6 - 스프레드 문법을 사용하는 경우
const arr = [...[1, 2], ...[3, 4]];
console.log(arr); // [1, 2, 3, 4]