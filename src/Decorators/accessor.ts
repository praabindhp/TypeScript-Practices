function Capitalize(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const original = descriptor.get;
    descriptor.get = function () {
        const result = original?.call(this);
        return (typeof result === 'string') ? result.toUpperCase : result;
    }
}

class Person3 {
    constructor(public firstName: string, public lastName: string) { }
   
   @Capitalize
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

}

let person2 = new Person3("praabindh", "pradeep");
console.log(person2.fullName); // PRAABINDH PRADEEP