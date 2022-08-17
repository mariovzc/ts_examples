export type Sizes = 'xs' | 'l' | 'xl'

export type Product = {
  name: string,
  created_at: Date,
  stock: number,
  size?: Sizes
}
