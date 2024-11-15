const postal = {

  postalCode: '123-4567',

  // this.postalCode
  checkPostalCode() {
    const replaced = this.postalCode.replace('-', '').length;
    // const length = replaced.length;

    if (replaced === 7) {
      return true;
    }
    return false;
  }
};

console.log(postal.checkPostalCode());
// true

const person = {
  name: '本田',
  age: 30,

  getName() {
    console.log( this.name );
    return this; // 呼び出し元で繋げられるようにこのように書く
  },
  getAge() {
    console.log( this.age );
    return this; // 呼び出し元で繋げられるようにこのように書く
  }
};

person.getName().getAge(); // メソッドを繋げられる
// 本田
// 30
