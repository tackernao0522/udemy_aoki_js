
// if (条件) {
//   条件が真なら実行
// } else {
// 条件が偽なら実行
// }

const height = 90;

// console.log(typeof height);

if (height >= 91) {
  console.log('身長は' + height + 'cmです');
}

if (height >= 90) {
  console.log('身長は' + height + 'cm以下です');
}

else {
  console.log('身長は90cmではありません');
}

// == 一致
// === 型も一致

const signal = 'blue';

if (signal === 'red') {
  console.log('止まれ');
} else if (signal === 'yellow') {
  console.log('一旦停止');
} else {
  console.log('進め');
}

const speed = 60;

if (signal === 'blue') {
  if (speed >= 60) {
    console.log('スピード違反');
  }
}
