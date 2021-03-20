'use strict';
{
  /* querySelectorAllで複数の値を取得 */
  const tabLabels = document.querySelectorAll('.tab__label li a');
  const tabContents = document.querySelectorAll('.tab__content');

  // forEach for-of
  tabLabels.forEach(clickedLabel => {
    // console.log(clickedLabel);
    clickedLabel.addEventListener('click', e => { // aタグで書いているので自動的にクリックするとそこへ飛んでしまうのでそれを外すためにpreventDefaultをつける
      e.preventDefault();
      /* clickされたラベルにaddEventListenerをつけることによりラベルごとにクリックされたら動きをつけることができる */

      tabLabels.forEach(label => {
        label.classList.remove('active'); // 全てのラベルから activeクラスを外す
      });

      clickedLabel.classList.add('active');　// クリックされたラベルだけにactiveクラスを付与

      tabContents.forEach(content => {
        content.classList.remove('active'); // こちらもactiveクラスを一旦外す
      });

      document.getElementById(clickedLabel.dataset.id).classList.add('active'); // 選択されたもののdatasetのidと書いている index.htmlのdata-idを表している

    })
  });
} // {}で囲むことによってブロックスコープを作ることができる グローバル環境ではなくローカルとして扱える
