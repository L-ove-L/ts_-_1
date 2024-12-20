// 1
function swap<T>(a: T, b: T): [T, T] {
  return [b, a]
}
const result = swap<number>(1, 2)
console.log(result)


// 2
interface Product {
  id: number
  name: string
  price: number
}
const findMostExpensiveProduct = (products: Product[]): Product | undefined => {
  if(products.length === 0) {
      return undefined
  }
  return products.reduce((max, product) => {
      return (product.price > max.price) ? product : max
  })
}
const products: Product[] = [
  { id: 1, name: "армлет", price: 2700 },
  { id: 2, name: "танго", price: 100 },
  { id: 3, name: "аганим", price: 4200 },
]
const mostExpensiveProduct = findMostExpensiveProduct(products)
console.log(mostExpensiveProduct)
