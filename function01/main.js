// function test(引数1, 引数2){
//   // 処理

//   // 戻り値
//   return 戻り値;
// }

// インプット引数なし(引数)
// アウトプットなし(戻り値)

function test() {
  console.log('テスト');
}

test();  // テスト

// 引数あり
// 戻り値なし

const comment = "コメント";
const comment_2 = "コメント2";

function getComment(string) {
  console.log(string); // // コメント
}

getComment(comment_2);

// 引数なし
// 戻り値なし

function getNumberOfComment() {
  return 5;
}

console.log(getNumberOfComment()); // 5

const NumberOfComment = getNumberOfComment();

console.log(NumberOfComment); // 5

// 引数 ２つ
// 戻り値あり

function sumPrice(int1, int2) {
  let int3 = int1 + int2;
  return int3;
}

const total = sumPrice(3, 5);
console.log(total); // 8
