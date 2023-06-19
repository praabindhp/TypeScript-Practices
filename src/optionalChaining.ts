// Optional Chaining
type Customer = {
    birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
// if (customer !== null && customer !== undefined) console.log(customer.birthday.toISOString());
console.log(customer?.birthday?.getFullYear());

// Optional Element Access Operator
// customers?.[0]

// Optional Call Operator
let log: any = (message: string) => console.log(message);
log?.('Praabindh');

/*
Output :
2023
Praabindh
*/