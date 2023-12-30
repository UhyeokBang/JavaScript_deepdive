//-메서드 축약 표현-
// ES5
var obj = {
    name: 'Lee',
    sayHi: function() {
      console.log('Hi! ' + this.name);
    }
  };
  
  obj.sayHi(); // Hi! Lee

  // ES6
const obj = {
    name: 'Lee',
    // 메서드 축약 표현
    sayHi() {
      console.log('Hi! ' + this.name);
    }
  };
  
  obj.sayHi(); // Hi! Lee