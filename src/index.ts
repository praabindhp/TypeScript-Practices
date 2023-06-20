import { calculateTax } from './tax';
const price = 10_000;
const taxAmount = calculateTax(price);
const halfShare = taxAmount / 2;
console.log(`Full Tax Amount : ${taxAmount}`);
console.log(`Half Share : ${halfShare}`);

/*
Output :
Full Tax Amount : 30
Half Share : 15
*/