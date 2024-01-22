// slice 메서드로 유사배열 객체를 배열로 변환 (참고: array.form이나 스프레드 문법으로도 할 수 있고 그것이 더 간단하다.)
function sum() {
    // 유사 배열 객체를 배열로 변환(ES5)
    var arr = Array.prototype.slice.call(arguments);
    console.log(arr); // [1, 2, 3]
  
    return arr.reduce(function (pre, cur) {
      return pre + cur;
    }, 0);
  }
  
  console.log(sum(1, 2, 3)); // 6