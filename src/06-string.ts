(()=> {
  let productTitle: string = "Titulo del producto";
  productTitle = "otro titulo";
  console.log("title", productTitle);

  const productDesc = "asdasdasda";
  console.log(productDesc)

  const summary = `
   title: ${productTitle}
   desc: ${productDesc}
  `;

  console.log(summary);

})()
