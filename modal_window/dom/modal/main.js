'use strict';

const modal = document.getElementById('modal');
const show = document.getElementById('modal__show');
const close = document.getElementById('modal__close');
const backGround = document.getElementById('modal__background');

show.addEventListener('click', () => { /* #modla__showをクリックすると */
  modal.classList.add('is-show'); /* .modalに .is-showが追加される */
  backGround.classList.add('is-show'); /* .modal__backgroundに .is-showが追加される */
})

close.addEventListener('click', () => { /* #modal__closeをクリックすると */
  modal.classList.remove('is-show'); /* .is-showが消される */
  backGround.classList.remove('is-show'); /* .is-showも消される */
})

backGround.addEventListener('click', () => { /* #modal__showがクリックされると */
  close.click(); /* is-showが消される */
})
