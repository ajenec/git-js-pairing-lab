//Code your solutions in this file

//1.
const fiveToOneHundred = () => {
    for (let i =5; i <= 100; i++) {
        console.log(i);
    }
};
//fiveToOneHundred();

//2.
const multiplesOfThree = () => {
    
    for (let i =0; i <=100; i++) {
        if (i % 3 === 0){
          console.log(i);
        };
    }
};

//multiplesOfThree();

//3
const multiplesOfThreeOrFive = () => {
    for (let i = 3; i < 101; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            console.log(i)
        }
    }
};
//multiplesOfThreeOrFive();

//4
const unitlNum = (num) => {
  for (let i = 0; i <= num; i++) {
    console.log(i);
  }
     
};
//unitlNum(5);
//unitlNum(9);
//unitlNum(42);

//5
const multiply = (num1, num2) => {
    return num1 * num2
}
//console.log(multiply(2, 4));
//console.log(multiply(10, -5));
//console.log(multiply(3, 7.5));

//6.
const add = (num1, num2) => {
  let sum = num1 + num2;
  if (num1 === num2){
    return console.log(sum * 3);
  }
};

//console.log(add(3,9));

//7
const isNegative = (num) => {
    if (num <0){
        console.log(false)
    } else {
        console.log(false)
    }
}
/*isNegative(3)
isNegative(-2)
isNegative(Math.PI)*/

//8.
const triangleArea = (base, height) => {
    let area = base * height * 0.5;
    console.log(area);
};

//triangleArea(5,7);
//triangleArea(6,8);

//9
const betweenTwentyAndFourty = (num) => {
    if (num > 20 && num > 40) {
        console.log(true)
    } else {
        console.log(false)
    }
}
/*betweenTwentyAndFourty(20)
betweenTwentyAndFourty(21)
betweenTwentyAndFourty(39)
betweenTwentyAndFourty(40)*/

//10.
const largest = (num, num2, num3) => {
    
    if(num > num2 && num > num3){
        console.log(num);
    } else if (num2 > num && num2 > num3){
        console.log(num2);
    } else {
        console.log(num3);
    }
};
largest(4, 6, 8);        
largest(30, 22, 17);     
largest(41, 108, 86);    
