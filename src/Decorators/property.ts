function MinLength(length: number) {
  return (target: any, propertyName: string) => {
    let value: string;
    const descriptor: PropertyDescriptor = {
        get() {
            return value;
        },
      set(newValue: string) {
        if (newValue.length < length)
          throw new Error(
            `${propertyName} Should Be At Least ${length} Characters Long}`
          );
        value = newValue;
      }
    };
    Object.defineProperty(target, propertyName, descriptor);
  }
}

class User {
  @MinLength(5)
  password: string;

  constructor(password: string) {
    this.password = password;
  }
}

let user = new User("12345");
console.log(user.password); // 12345