//매개변수 기본값
function logName(name = 'Lee') {
    console.log(name);
  }
  
  logName();          // Lee
  logName(undefined); // Lee
  logName(null);      // null