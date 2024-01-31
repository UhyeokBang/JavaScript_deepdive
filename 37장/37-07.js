/*
add 메서드는 새로운 요소가 추가된 Set 객체를 반환한다. 따라서 add 메서드를 호출한 후에 add 메서드를
연속적으로 호출할 수 있다.
*/
const set = new Set();

set.add(1).add(2);
console.log(set); // Set(2) {1, 2}