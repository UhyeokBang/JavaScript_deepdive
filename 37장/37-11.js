/*
Set 객체에 특정 요소가 존재하는지 확인하려면 Set.prototype.has 메서드를 사용한다. has 메서드는 특정 요소의
존재 여부를 나타내는 불리언 값을 반환한다.
*/
const set = new Set([1, 2, 3]);

console.log(set.has(2)); // true
console.log(set.has(4)); // false