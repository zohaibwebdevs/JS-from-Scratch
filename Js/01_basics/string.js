// string and its methods

let str = "Apple"
console.log(str);

let newStr = new String("MANGO")
console.log(newStr);

console.log(str.length);

console.log(str.indexOf("l"));

console.log(newStr.charAt(2));

console.log(str.toUpperCase());

console.log(newStr.toLowerCase());

// comparing operater

let a = "1";
let b = "2";

if(a < b) {
    console.log("a is less than b");
} else{
    console.log("a is greater than b");
}

console.log(String.fromCharCode(189, 43, 190, 61));

console.log(String.fromCodePoint(1999, 123, 98, 63));