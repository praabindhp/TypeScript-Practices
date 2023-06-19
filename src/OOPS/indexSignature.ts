class SeatAssignment{
    // A1, A2, A3, A4, ...
    // Praabindh, Pradeep, Bindhu, Jai, ...
    // Index Signature Property
    [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats["A1"] = "Praabindh";
seats.A2 = "Pradeep";
seats["A3"] = "Bindhu";
seats.A4 = "Jai";

console.log(seats);

/*
Output :
SeatAssignment {
  A1: 'Praabindh',
  A2: 'Pradeep',
  A3: 'Bindhu',
  A4: 'Jai'
}
*/

console.log(seats.A1);
// Output : Praabindh