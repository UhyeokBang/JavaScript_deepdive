// 배열 디스트럭처링 할당을 위한 변수에 Rest파라미터와 유사하게 Rest 요소를 사용할 수 있다.

// Rest 요소
const [x, ...y] = [1, 2, 3];
console.log(x, y); // 1 [ 2, 3 ]