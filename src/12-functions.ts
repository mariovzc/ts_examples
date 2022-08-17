(()=> {
  type Sizes = 's' | 'm' | 'l' | 'xl'

  function createProduct(
    title: string,
    created_at: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      created_at,
      stock,
      size
    }
  }

  const producto1 = createProduct('p1', new Date(), 12, 's')
  console.log(producto1)


  const createProduct2 = (
      title: string,
      created_at: Date,
      stock: number,
      size?: Sizes
    ) =>({
      title,
      created_at,
      stock,
      size
    })

  const producto2 = createProduct2('p1', new Date(), 12)
  console.log(producto2)


})()
