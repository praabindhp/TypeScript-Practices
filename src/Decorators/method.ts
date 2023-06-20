function Log2(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value as Function;
  descriptor.value = function (...args: any) {
    console.log("Old Implementation");
    original.call(this, ...args);
    console.log("New Implementation");
  }
}

class Person2 {
  @Log2
  say(message: string) {
    console.log("Person Says : " + message);
  }
}

/*
Output :
Old Implementation
Person Says : Hello
New Implementation
*/