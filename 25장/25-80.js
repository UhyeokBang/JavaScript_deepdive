/* 상속을 받은 클래스가 생성한 인스턴스는 부모클래스.prototype의 모든 메서드를 사용할 수 있다.*/

// Array 생성자 함수를 상속받아 확장한 MyArray
class MyArray extends Array {
    // 중복된 배열 요소를 제거하고 반환한다: [1, 1, 2, 3] => [1, 2, 3]
    uniq() {
      return this.filter((v, i, self) => self.indexOf(v) === i); //이런식으로 filter는 부모클래스.prototype메서드이다.
    }
  
    // 모든 배열 요소의 평균을 구한다: [1, 2, 3] => 2
    average() {
      return this.reduce((pre, cur) => pre + cur, 0) / this.length; //이런식으로 reduce는 부모클래스.prototype메서드이다.
    }
  }
  
  const myArray = new MyArray(1, 1, 2, 3);
  console.log(myArray); // MyArray(4) [1, 1, 2, 3]
  
  // MyArray.prototype.uniq 호출
  console.log(myArray.uniq()); // MyArray(3) [1, 2, 3]
  // MyArray.prototype.average 호출
  console.log(myArray.average()); // 1.75