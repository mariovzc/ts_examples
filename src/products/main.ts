import { addProduct, calStock, products } from "./product.service";

addProduct({
  name: "hola",
  stock: 3,
  created_at: new Date()
})
addProduct({
  name: "hola1",
  stock: 1,
  created_at: new Date()
})

console.log(products)

console.log(calStock())
