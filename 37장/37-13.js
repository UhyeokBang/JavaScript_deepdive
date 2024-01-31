// 만약 존재하지 않는 Set 객체의 요소를 삭제하면 에러 없이 무시된다.

const set = new Set([1, 2, 3]);

// 존재하지 않는 요소 0을 삭제하면 에러없이 무시된다.
set.delete(0);
console.log(set); // Set(3) {1, 2, 3}