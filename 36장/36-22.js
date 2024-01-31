/*
객체 디스트럭처링 할당을 위한 변수에 Rest 파라미터나 Rest 요소와 유사하게 Rest 프로퍼티 ...을 사용할 수 있다.
*/

// Rest 프로퍼티
const { x, ...rest } = { x: 1, y: 2, z: 3 };
console.log(x, rest); // 1 { y: 2, z: 3 }