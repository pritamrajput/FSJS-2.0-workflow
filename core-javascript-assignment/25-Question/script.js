// 25. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
//     - The same groups apply to both men and women.
//     - Underweight: BMI is less than 18.5
//     - Normal weight: BMI is 18.5 to 24.9
//     - Overweight: BMI is 25 to 29.9
//     - Obese: BMI is 30 or more

'use strict';
const height = 1.67;
const weight = 63;

function calcBMI (h, w){
    return w/(h ** 2);
}

const BMI = calcBMI(height, weight);
console.log(BMI)

if(BMI < 18.5){
    console.log("Underweight");
}
else if(BMI >= 18.5 && BMI < 24.9){
    console.log("Normal"); 
}
else if(BMI >= 25 && BMI < 29.9){
    console.log("overweight"); 
}
else if(BMI >= 30){
    console.log("Obese"); 
}
else{
    console.log("Enter correct value");
}