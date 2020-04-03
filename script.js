// Factorial using for
let inputNumber = 4;
let numFac = 1;

for ( i = 0; i < inputNumber; i++){
    numFac = numFac * (inputNumber - i);
    console.log((inputNumber - i));
    
}

console.log('Factorial' + "=" + inputNumber + numFac);

// // Reverse array
let list = ["apple","lemon","anggur","mangga"];

let revers = list.reverse();
console.log(revers);

// Assign grade
let nilai = 90;

// function assignGrade (hasil) {
   if(hasil > 90){
       return 'A'
   }
   else if (hasil > 80){
       return 'B'
   } 
   else if (hasil > 75) {
       return 'C'
   }
   else if (hasil > 50) {
       return 'D'
   }
   else {
       return 'F'
   }

   for(let i = nilai; i <= nilai; i++){
    console.log('anda'+'dapat' + i + 'artinya' + assignGrade(i));
    
   }

// Multiplier in for
let a = 8;

for(i= 0; i < 11; i++){
    hasil = a * i;   
    console.log('Perkalian' + a + '*' + i + '=' + hasil);
}

// Reverse String
let rev = test => {
    return test.split("").reverse().join("")
}
let nama = "Hello World"
let reverse = rev(nama)
console.log(reverse);
