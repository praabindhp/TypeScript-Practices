// The Unknown Type
function render(document: unknown) {
  if (typeof document === "string") {
    document.toUpperCase();
  }
  // document.move();
}

// (OR)

type WordDocument = {
    move: () => {},
    toUpperCase: () => {}
}

function render2(document: unknown) {
  // if(document instanceof WordDocument)
  if (document as WordDocument){
    // document.toUpperCase();
  }
//   document.move();
}
