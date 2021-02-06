// const fruits = new Array();
const fruits = [
  'りんご', 'バナナ'
]; // シンタックスシュガー(簡単に書く書き方)

console.log(fruits);
// ["りんご", "バナナ"]

fruits.push('みかん');

console.log(fruits);
// ["りんご", "バナナ", "みかん"]

// callback 折り返し電話
fruits.forEach(function (input) {
  console.log(input);
});
// りんご
// バナナ
// みかん
