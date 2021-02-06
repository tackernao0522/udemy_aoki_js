// 一般的な関数の作り方
// function getItem (){}

// コールバック関数 名前がない関数 (無名関数・匿名関数)

// ES6 アロー関数 =>
// 関数の名前あり
// const getItem = () => {console.log('アロー')};
// getItem();
// アロー

// さらに省略　引数が一個なら{}もいらない 0個ならいる
const getItem = () => console.log('アロー');
getItem();
// アロー

// 関数の名前なし
const fruits = [
  'りんご', 'バナナ'
];

fruits.forEach(input => console.log(input));
// りんご
// バナナ
