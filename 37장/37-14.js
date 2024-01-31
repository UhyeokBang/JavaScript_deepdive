/*
delete 메서드는 삭제 성공 여부를 나타내는 불리언 값을 반환한다. 따라서 add 메서드와 달리
연속적으로 호출할 수 없다.
*/
const set = new Set([1, 2, 3]);

// delete는 불리언 값을 반환한다.
set.delete(1).delete(2); // TypeError: set.delete(...).delete is not a function