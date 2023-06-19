interface Product {
  name: string;
  price: number;
}

// interface readonlyProduct {
//     readonly name: string;
//     readonly price: number;
// }

type ReadOnly<T> = {
  // Index Signature Property
  
  // KeyOf Property
  readonly [K in keyof T]: T[K];
}

type Optional<T> = {
  [K in keyof T]?: T[K];
}

let product: ReadOnly<Product> = {
  name: 'a',
  price: 1,
  title: ""
}

// product.name = 'a';