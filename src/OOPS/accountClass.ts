class Account {
  // readonly id: number;
  // owner: string;
  // private _balance: number;
  nickname?: string;

  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {
    // this.id = id;
    // this.owner = owner;
    // this._balance = balance;
  }

  deposit(amount: number) {
    if (amount <= 0)
      throw new Error("Deposit Amount 💸 Should Be Greater Than 0");
    this._balance += amount;
  }

  withdraw(amount: number) {
    if (amount > this._balance)
      throw new Error("Withdraw Amount 💰 Should Be Less Than Balance");
    this._balance -= amount;
  }

  // private calculateTax(): number {
  //   return this._balance * 0.25;
  // }

  get balance(): number {
    return this._balance;
  }

  // set balance(value: number) {
  //   if (value < 0) throw new Error("Balance 💰 Cannot Be Negative");
  //   this._balance = value;
  // }
}

let account = new Account(1, "Praabindh", 500);
console.log("Initial Balance : ", account.balance);
let depositAmount: number = 150;
account.deposit(depositAmount);
console.log(`Balance After ${depositAmount} Deposit :`, account.balance);
let withdrawAmount: number = 100;
account.withdraw(withdrawAmount);
console.log(
  `Balance After ${withdrawAmount} Withdrawal :`,
  account.balance
);

/*
Output :
Initial Balance : 500
Balance After 150 Deposit : 650
Balance After 100 Withdrawal : 550
*/
