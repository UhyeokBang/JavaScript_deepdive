/*
배열의 요소가 객체인 경우 배열 디스트럭처링 할당과 객체 디스트럭처링 할당을 혼용할 수 있다.
*/

const todos = [
    { id: 1, content: 'HTML', completed: true },
    { id: 2, content: 'CSS', completed: false },
    { id: 3, content: 'JS', completed: false }
  ];
  
  // todos 배열의 두 번째 요소인 객체로부터 id 프로퍼티만 추출한다.
  const [, { id }] = todos;
  console.log(id); // 2