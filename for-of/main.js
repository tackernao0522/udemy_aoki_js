// 繰り返し
// for 繰り返しの回数を指定
// for in あまり使われない
// for of (ESS6) 使いやすい

const scores = [10, 20, 30];

// one of them
for (score of scores) {
  console.log(score);
}
// 10
// 20
// 30

// while

// オブジェクト {}

// for(初期値; 繰り返す条件; 増減 ++ --)

for (let i = 0; i <= 10; i++) {
  console.log(i);
}