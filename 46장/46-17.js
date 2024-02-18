/* (중요) await 키워드는 프로미스를 반환하는 것이 아니라 프로미스가 resolve 한 값을 반환한다. */

const fetch = require('node-fetch');

const getGithubUserName = async id => {
  const res = await fetch(`https://api.github.com/users/${id}`); // ①
  const { name } = await res.json(); // ②
  console.log(name); // Ungmo Lee
};

getGithubUserName('ungmo2');