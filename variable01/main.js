// 変数　変わる数 variable

// ES5
// var test = 123;
// var test = 'テスト'; // 上書きされる

// ES6
// let test = 123;
// let test = "テスト"; // 上書きできない
// test += 123; // 可能

const test = 123; // 定数 数字
const test_2 = 'テスト'; // 文字

// const test = 'テスト'; // 書き換えられない
// test += 123; // エラーになる

// 動的型付け言語 変数中身を自動的に判定

console.log(typeof test); // typeofと入れるとnumberを出る
