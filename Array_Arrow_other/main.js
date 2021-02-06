// Array.filter
const scores = [10, 20, 30, 40];

const newScores = scores.filter(value => value >= 30);

console.log(newScores);
// [30, 40]

// Array.find
const members = ['本田', '香川', '長友'];

const member = members.find(value => value === '長友');

console.log(member);
// 長友

// Array.map 配列を元に新しい配列を作る
const userList = [10, 20, 30, 40];

// テンプレート文字列 `${}` バッククォート
const userIdList = userList.map(value => `user_${value}`);

console.log(userIdList);
// ["user_10", "user_20", "user_30", "user_40"]

console.table(userIdList); // 表で見ることができる
