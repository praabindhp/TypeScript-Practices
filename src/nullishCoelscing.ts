// Nullish Coelscing

let speed: number | null = null;
let ride = {
    speed: speed ?? 30
}

console.log(ride.speed);

/*
Output :
30
*/