//super 키워드
//상속받는 클래스 내부 생성자함수에서 super키워드 사용
// 수퍼클래스
class Base {
    constructor(a, b) { // ④
      this.a = a;
      this.b = b;
    }
  }
  
  // 서브클래스
  class Derived extends Base {
    constructor(a, b, c) { // ②
      super(a, b); // ③
      this.c = c;
    }
  }
  
  const derived = new Derived(1, 2, 3); // ①
  console.log(derived); // Derived {a: 1, b: 2, c: 3}