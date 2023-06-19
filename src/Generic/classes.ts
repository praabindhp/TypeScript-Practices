class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

let pair = new KeyValuePair<number, string>(1, "Praabindh");
console.log(pair);
console.log(pair.key);
console.log(pair.value);

/*
Output :
KeyValuePair { key: 1, value: 'Praabindh' }
1
Praabindh
*/