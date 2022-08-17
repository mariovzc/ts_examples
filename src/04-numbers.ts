(() => {


  // Forma inferida
  let productPrice = 100;
  productPrice = 12;

  // forma explicita
  let customerAge: number = 23;

  customerAge =+ 1;

  let productStock: number;

  console.log('productstock', productStock);

  if (productStock > 10) {
    console.log("is greater")
  }

  let discount = parseInt("123");

  console.log('discount', discount)

  let hex = 0xfff;

  console.log('hex', hex)

  let bin = 0b1010;

  console.log('bin', bin)

  // esto no se deberia utilizar
  const myNumber: Number = 10;

})()
