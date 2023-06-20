// Nullable Types

function greet(name: string | null | undefined) {
  if (name) console.log(`Hello ${name}`);
  else console.log('Howdy');
}

greet(null);

/*
Output :
Howdy
*/