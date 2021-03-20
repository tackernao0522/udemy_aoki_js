'use strict';

const images = [ // 配列を作る
  'images/image000.jpg',
  'images/image001.jpg',
  'images/image002.jpg',
  'images/image003.jpg',
  'images/image004.jpg',
  'images/image005.jpg',
  'images/image006.jpg',
];

// 画像の順番を把握する変数を作る
let currentIndex = 0;

const mainImage = document.getElementById('carousel__main'); // メインの画像のエリアのidを取得 #carousel__mainはimgタグである
mainImage.src = images[currentIndex]; // .srcの属性を使うと画像のありかを表す。 現在選ばれている場所に応じた画像の場所が設定される
// console.log(mainImage.src);

// forEach for-of
for (let [index, image] of images.entries()) { // 何番目の画像がクリックされたのか判定したいindexの方も取得したい for-ofでindexを取得するときは.entriesメソッドをつける
  // console.log(index, image);

  const img = document.createElement('img'); // imgタグを生成
  img.src = image; // イメージのソース属性に imageの変数を入れる

  const li = document.createElement('li'); // liタグを生成
  if (index === currentIndex) {
    li.classList.add('current');
  }

  li.addEventListener('click', () => { // クリックの挙動をeventlistenerで作る
    mainImage.src = image; // 大きい画像のソースをクリックした画像の場所に設定する
    mainImage.classList.add('active'); // 大きい画像にactiveのclassを付与

    setTimeout(() => { // cssの方でanimationをつけているのでその挙動をさせる時間(fade) @keyframes fadeImg
      mainImage.classList.remove('active');
    }, 800); // ミリ秒 1000=1秒

    const thumbnails = document.querySelectorAll('.carousel__thumbnails > li'); // サムネイルを全て取得
    thumbnails[currentIndex].classList.remove('current'); // .thumbnailのクラスを一旦削除
    currentIndex = index;
    thumbnails[currentIndex].classList.add('current'); // クリックされたリストだけにcurrentクラスをつける
  });

  li.appendChild(img); // liの子要素に変数img(24行目)を入れる = thumbnail画像
  // console.log(img);
  document.querySelector('.carousel__thumbnails').appendChild(li); // .carousel__thumbnailsの子要素にliでつけている
}

const next = document.getElementById('carousel__next'); // #carousel_nextを取得して
next.addEventListener('click', () => {
  let target = currentIndex + 1; // クリック後 currentIndexを１つ増やす
  if (target === images.length) { // 配列の長さを表す(7枚)
    target = 0; // indexは0から始まるので7番目はないので7になったら0に戻す(index)
  }
  document.querySelectorAll('.carousel__thumbnails > li')[target].click(); // 32行目と同じ動作になる
});

const prev = document.getElementById('carousel__prev');
prev.addEventListener('click', () => {
  let target = currentIndex - 1; // prevをクリックしたらindexを１つ減らす
  if (target < 0) { // 0より減ったら
    target = images.length - 1; // 7になると１つ減らして6にする
  }
  document.querySelectorAll('.carousel__thumbnails > li')[target].click();
});
