// Set 객체의 요소 개수를 확인할 때는 Set.prototype.size 프로퍼티를 사용한다.

const { size } = new Set([1, 2, 3, 3]);
console.log(size); // 3