/*
객체 디스트럭처링 할당은 객체를 인수로 전달받는 함수의 매개변수에도 사용할 수 있다.
*/

function printTodo({ content, completed }) {
    console.log(`할일 ${content}은 ${completed ? '완료' : '비완료'} 상태입니다.`);
  }
  
  printTodo({ id: 1, content: 'HTML', completed: true });
  // 할일 HTML은 완료 상태입니다.