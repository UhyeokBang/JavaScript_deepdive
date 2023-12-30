/*원시 값을 할당한 변수는 원시 값 자체를 값으로 갖는다. 
하지만 객체를 할당한 변수가 기억하는 메모리 주소를 통해 메모리 공간에 접근하면 "참조 값"에 접근할 수 있다.
따라서 원시 값과는 다르게 여러개의 식별자가 하나의 객체를 공유할 수 있다. "147pg ~ 153pg 참조" */
var person = {
    name: 'Lee'
  };
  
  // 참조값을 복사(얕은 복사). copy와 person은 동일한 참조값을 갖는다.
  var copy = person;
  
  // copy와 person은 동일한 객체를 참조한다.
  console.log(copy === person); // true
  
  // copy를 통해 객체를 변경한다.
  copy.name = 'Kim';
  
  // person을 통해 객체를 변경한다.
  person.address = 'Seoul';
  
  // copy와 person은 동일한 객체를 가리킨다.
  // 따라서 어느 한쪽에서 객체를 변경하면 서로 영향을 주고 받는다.
  console.log(person); // {name: "Kim", address: "Seoul"}
  console.log(copy);   // {name: "Kim", address: "Seoul"}