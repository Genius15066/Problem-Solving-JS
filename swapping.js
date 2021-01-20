let a = 5, b = 10;

//Method-1: temp variable
let temp = a;
a = b;
b = temp;
console.log("a:", a, " b:", b);

//Method-2:Destructuring assignment
//Here a=10,b=5;

[a, b] = [b, a];
console.log("a:", a, " b:", b);

//Method-3:Addition and difference
//Here a=5,b=10;
a = a + b;
b = a - b;
a = a - b;
console.log("a:", a, " b:", b);

//Method-4:Bitwise XOR operator
//Here a=10,b=5;
a = a ^ b;
b = a ^ b;
a = a ^ b;
console.log("a:", a, " b:", b);
