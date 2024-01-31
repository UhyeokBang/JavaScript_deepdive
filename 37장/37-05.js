/*
size 프로퍼티는 setter 함수 없이 getter 함수만 존재하는 접근자 프로퍼티다. 따라서 size 프로퍼티에
숫자를 할당하여 Set 객체의 요소 개수를 변경할 수 없다.
*/
const set = new Set([1, 2, 3]);

console.log(Object.getOwnPropertyDescriptor(Set.prototype, 'size'));
// {set: undefined, enumerable: false, configurable: true, get: ƒ}

set.size = 10; // 무시된다.
console.log(set.size); // 3