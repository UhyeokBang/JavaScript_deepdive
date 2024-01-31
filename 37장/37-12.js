/*
Set 객체의 특정 요소를 삭제하려면 Set.prototype.delete 메서드를 사용한다. delete 메서드는 삭제 성공
여부를 나타내는 불리언 값을 반환한다.
*/

const set = new Set([1, 2, 3]);

// 요소 2를 삭제한다.
set.delete(2);
console.log(set); // Set(2) {1, 3}

// 요소 1을 삭제한다.
set.delete(1);
console.log(set); // Set(1) {3}