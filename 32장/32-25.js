/* substring 메서드를 indexOf 메서드와 함께 활용하면 특정 문자열을 기준으로 앞뒤에 위치한 부분 문자열을 
취득할 수 있다. */

const str = 'Hello World';

// 스페이스를 기준으로 앞에 있는 부분 문자열 취득
str.substring(0, str.indexOf(' ')); // -> 'Hello'

// 스페이스를 기준으로 뒤에 있는 부분 문자열 취득
str.substring(str.indexOf(' ') + 1, str.length); // -> 'World'