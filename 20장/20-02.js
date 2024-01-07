//strict 모드를 적용하려면 전역의 선두 또는 함수 몸체의 선두에 'use strict';를 추가한다.
'use strict';

function foo() {
  x = 10; // ReferenceError: x is not defined
}
foo();