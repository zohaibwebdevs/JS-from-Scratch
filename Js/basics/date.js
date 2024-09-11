let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());

let newDate = new Date(2024, 0, 15)
let newDate1 = new Date("2024/1/15")
let newDate2 = new Date(2024, 1, 20, 5, 30)

// console.log(newDate.toLocaleString());
// console.log(newDate1.toLocaleString());
// console.log(newDate.toLocaleString());

let timeStamp = Date.now();
console.log(timeStamp);

console.log(newDate.getTime());

console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));