// オブジェクト (モノ)
const member_2 = {
  '本田': {
    'height': 170,
    'hobby': 'サッカー'
  },
  '香川': {
    'height': 165,
    'hobby': 'サッカー'
  }
};

console.log(member_2.香川.height);

const member_3 = {
  '1組': {
    '本田': {
      'height': 170,
      'hobby': 'サッカー'
    }
  },
  '2組': {
    '香川': {

    }
  }
};

console.log(member_3['1組'].本田.hobby);
