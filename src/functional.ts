function calculateTax(income: number, taxYear = 2023): number {
    if ((taxYear) < 2023)
        return income * 1.2;
    return income * 1.3;
}

const payableTax = calculateTax(10_000, 2021);
console.log(`Payable Tax: ${payableTax}`);

/*
Output :
Payable Tax: 12000
*/