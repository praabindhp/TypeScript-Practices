interface Product {
  name: string;
  price: number;
}

// interface readonlyProduct {
//     readonly name: string;
//     readonly price: number;
// }

type readonlyProduct = {
  // Index Signature Property
  
  // KeyOf Property
  [K in keyof Product]: Product[K];
};