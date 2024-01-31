/*
배열 디스트럭처링 할당의 기준은 배열의 인덱스이다. 즉, 순서대로 할단된다. 이때 변수의 개수와 이터러블의
요소 개수가 반드시 일치할 필요는 없다.
*/

const [a, b] = [1, 2];
console.log(a, b); // 1 2

const [c, d] = [1];
console.log(c, d); // 1 undefined

const [e, f] = [1, 2, 3];
console.log(e, f); // 1 2

const [g, , h] = [1, 2, 3];
console.log(g, h); // 1 3