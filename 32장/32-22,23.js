// substring 메서드
const str = 'Hello World';
// 인덱스 1부터 인덱스 4 이전까지의 부분 문자열을 반환한다.
str.substring(1, 4); // -> ell

/* substring 메서드의 두번 째 인수는 생략할 수 있다. 이때 첫 번째 인수로 전달한 인덱스에 위치하는
문자부터 마지막 문자까지 부분 문자열을 반환한다. */
str = 'Hello World';
// 인덱스 1부터 마지막 문자까지 부분 문자열을 반환한다.
str.substring(1); // -> 'ello World'