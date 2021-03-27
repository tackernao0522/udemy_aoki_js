import './style.scss';
require('intersection-observer');
import 'whatwg-fetch';

console.log('webpackテストです');

// window.addEventListener('load', () => {
//   alert('babelテストです');
// });

const url = 'http://coinbaby8.com/udemy_js_api/api/udemy_js';

const get_options = {
  method: 'get'
};

const getFormData = fetch(url, get_options)
  .then(response => response.json());
console.log(getFormData);

const postForm = document.forms.post_form; // フォームの情報を取得している
const formData = new FormData(postForm); // フォームデータオブジェクトを作って取得しているフォーム情報を引数にしている
// console.log(formData);

// URLを生成するサンプル
// 日本語はURLエンコードが必要
const your_name = encodeURI(formData.get('your_name'));

const stringJoin = '?' + 'your_name' + '=' + your_name + '&';
console.log(stringJoin);

// entriesメソッドを使うことによって中身が見えるようになる
// for (let fd of formData.entries()) {
// console.log(`${fd[0]}: ${fd[1]}`); // inputの初期値(value)が表示される
// }

document.getElementById('button')
  .addEventListener('click', () => {
    const postForm = document.forms.post_form;
    const formData = new FormData(postForm);

    const url = 'http://coinbaby8.com/udemy_js_api/api/udemy_js';

    const post_options = {
      method: 'post',
      body: formData
    };

    fetch(url, post_options)
      .then(response => {
        if (response.ok) {
          return response.text();
        } else {
          return new Error();
        }
      })
      .then(text => console.log(text))
      .catch(error => console.log(error));
  });
