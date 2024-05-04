//part 1 part 1 part 1
//Math Problems
//Initial numbers to verify
const num1 = 10;
const num2 = 15;
const num3 = 20;
const num4 = 5;

//do numbers add up to 50?
const isSum50 = (num1+num2+num3+num4)===50;
console.log("is the sum 50?", isSum50)

//are at least 2 numbers odd? True/False
const areTwoOdd = (num1%2)+(num2%2)+(num3%2)+(num4%2) >= 2
console.log("Are there two or more odd numbers?", areTwoOdd)

//no numbers can be larger than 25
const areLargerThan25 = num1>25 || num2>25 || num3>25 || num4>25;
console.log("Are any of the numbers larger than 25?", areLargerThan25)

//are all of the numbers unique
const isUnique = num1 != num2 && num1!=num3 && num1!=num4 && num2!=num3 && num2!=num4 && num3!=num4;
console.log('Are all numbers unique?', isUnique)

//did the numbers pass all of the validation checks?
const isValid = isSum50&&areTwoOdd&&!areLargerThan25&&isUnique;
console.log('did the numbers pass all of the validation checks?', isValid);

//#1 - Check if all numbers are divisible by 5. Cache the result in a variable.
const divisibleBy5=((num1 % 5) && (num2 % 5) && (num3 % 5) || (num4 % 5) === 0 );
console.log("Divisible by 5?", divisibleBy5);
//#2 - Check if the first number is larger than the last. Cache the result in a variable.
const larger1="num1 is larger"
const larger4="num4 is larger"
if ( num1 > num4) {
    console.log('Which number is larger? ',larger1);
} else  console.log('Which number is larger? ',larger4);
//#3 - Accomplish the following arithmetic chain:
        //Subtract the first number from the second number.
        //Multiply the result by the third number.
        //Find the remainder of dividing the result by the fourth number.
const arithmeticChain1=((num2-num1)*num3)%num4;
console.log("The result of the Arithmetic Chain is ",arithmeticChain1);

//
//
//
//

//part 2 part 2 part 2
//Plan a cross-country road trip!
    //The distance of the trip is 1,500 miles
    //Your car's fuel efficiency is as follows:
        //at 55mph, you get 30 mpg
        //at 60 mph, you get 28 mpg
        //at 75 mph, you get 23 mpg
    //You have a fuel budget of $175
    //The average cost of fuel is $3 per gallon
//DESIGN A PROGRAM
    //FIRST QUESTION - How many gallons of fuel will you need for the entire trip?
    //SECOND QUESTION - Will your budget be enough to cover the fuel expense?
    //THIRD QUESTION - How long will the trip take, in hours?
    //Compare the results when traveling at avg speed 55, 60, 75 mph
    //FOURTH QUESTION - Which makes the most sense for the trip?


const distance=1500;
const mph55=30;
const mph60=28;
const mph75=23;
const avgSpeed=(55+60+75)/3
const budget=175;
const costFuel=3;

const minAmountFuel=distance/mph55;
const amountFuel60mph=distance/mph60;
const maxAmountFuel=distance/mph75;
const avgAmountFuel=distance/((mph55+mph60+mph75)/3)

const sufficientBudget55mph=(minAmountFuel*costFuel)<=budget;
const sufficientBudget60mph=(amountFuel60mph*costFuel)<=budget;
const sufficientBudget75mph=(maxAmountFuel*costFuel)<=budget;
const sufficientBudgetAvgMph=(avgAmountFuel*costFuel)<=budget;

const howLong55mph=(distance/55);
const howLong60mph=(distance/60);
const howLong75mph=(distance/75);
const howLongAvg=(distance/avgSpeed);


let firstQuestion= 'How many gallons of fuel will you need for the entire trip?'
console.log(firstQuestion);
console.log('Minimum amount of fuel required is ',minAmountFuel,' gallons');
console.log('Amount of fuel required at avg speed of 60mph is ',amountFuel60mph,' gallons');
console.log('Maximum amount of fuel required is ' ,maxAmountFuel,' gallons');
console.log('The average amount of fuel required is ',avgAmountFuel,' gallons');

let secondQuestion='Will your budget be enough to cover the fuel expense?'
console.log(secondQuestion);
console.log('Do I have enough money for fuel if I drive avg. speed 55mph?',sufficientBudget55mph);
console.log('Do I have enough money for fuel if I drive avg. speed 60mph?',sufficientBudget60mph);
console.log('Do I have enough money for fuel if I drive avg. speed 75mph?',sufficientBudget75mph);
console.log('Do I have enough money for fuel if I drive avg. speed of '+avgSpeed+'mph?', sufficientBudgetAvgMph);

let thirdQuestion='How long will the trip take, in hours?'
console.log(thirdQuestion);
console.log('How long will the trip take with avg. speed of 55mph? ',howLong55mph, ' hours');
console.log('How long will the trip take with avg. speed of 60mph? ', howLong60mph, ' hours');
console.log('How long will the trip take with avg. speed of 75mph? ', howLong75mph,' hours');
console.log('How long will the trip take with avg. speed of '+avgSpeed+'mph?', howLongAvg,' hours');

//FOURTH QUESTION - Which makes the most sense for the trip?
let fourthQuestion='Which makes thet most sense for the trip?'
console.log(fourthQuestion);
console.log('60mph is the best speed because the trip will only take ',howLong60mph,' hours and come in under budget:',sufficientBudget60mph);

//
//
//
//part 3 part 3 part 3
//FUTURE EXPLORATION - consider Control Flow and Functions to expedite and automate blocks of code