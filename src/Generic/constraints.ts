class Human {
    constructor(public name: string) {}
}

class Employer extends Human {
    constructor(name: string, public balance: number) {
        super(name);
    }
}

function echo<T extends Human>(value: T): T {
    return value;
}

echo(new Employer("Praabindh", 1000))
console.log(echo(new Employer("Praabindh", 1000)));

/*
Output :
Employer { name: 'Praabindh', balance: 1000 }
*/