'use strict'; // const等つけ忘れ防止

const globalVariable = 'グローバル';

function checkScope(){
  const localVarible = 'ローカル';

  console.log(localVarible);
  // console.log(globalVariable); // グローバル
}

console.log(globalVariable); // グローバル

// console.log(localVarible); // 使えない　エラー

checkScope(); // ローカル
