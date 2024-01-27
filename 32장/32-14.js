/* ES6에서 도입된 includes 메서드는 대상 문자열에 인수로 전달받은 문자열이 포함되어 있는지 확인하여
 그 결과를 true 또는 false로 반환한다. */
const str = 'Hello world';

str.includes('Hello'); // -> true
str.includes('');      // -> true
str.includes('x');     // -> false
str.includes();        // -> false