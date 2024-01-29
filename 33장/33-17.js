/*
자바스크립트가 기본 제공하는 빌트인 심벌 값을 ECMAScript 사양에서는 Well-known Symbol 이라 부른다.
Well-known Symbol은 자바스크립트 엔진의 내부 알고리즘에 사용된다.
 */

/*
ECMAScript 사양에 규정되어 있는 대로 Well-known Symbol인 Symbol-interator를 키로 갖는 메서드를 객체에
추가하고  이터레이터를 반환하도록 구현하면 그 객체는 이터러블이 된다.
 */

// 1 ~ 5 범위의 정수로 이루어진 이터러블
const iterable = {
    // Symbol.iterator 메서드를 구현하여 이터러블 프로토콜을 준수
    [Symbol.iterator]() {
      let cur = 1;
      const max = 5;
      // Symbol.iterator 메서드는 next 메서드를 소유한 이터레이터를 반환
      return {
        next() {
          return { value: cur++, done: cur > max + 1 };
        }
      };
    }
  };
  
  for (const num of iterable) {
    console.log(num); // 1 2 3 4 5
  }