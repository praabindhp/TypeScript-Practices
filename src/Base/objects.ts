// Objects

type Employee = {
    readonly id: number;
    name: string;
    retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "Praabindh",
  retire: function (date: Date) {
    console.log(`Retiring On ${date}`);
  },
};

/*
Output :
Retiring On Thu Dec 31 2020 23:59:59 GMT+0530 (India Standard Time)
*/