// Union Types

function kgToLbs(weigth: number | string): number {
    if (typeof weigth === 'number') return weigth * 2.2;
    else return parseInt(weigth) * 2.2;
}

console.log(kgToLbs(10));
console.log(kgToLbs('10'));

/*
Output :
22
22
*/