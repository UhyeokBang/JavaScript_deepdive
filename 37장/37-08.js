// Set 객체에 중복된 요소의 추가는 허용되지 않는다. 이때 에러가 발생하지는 않고 무시된다.
const set = new Set();

set.add(1).add(2).add(2);
console.log(set); // Set(2) {1, 2}