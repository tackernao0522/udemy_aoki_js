// const test = new Object();
const test = {
  test1:10,
  test2:20,
  test3:30
}; // 簡単な書き方

console.log(test);
// {test1: 10, test2: 20, test3: 30}

console.log(Object.values(test));
// [10, 20, 30]

for( value of Object.values(test) ){
  console.log(value);
}
// 10
// 20
// 30
