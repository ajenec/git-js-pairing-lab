//Code your solutions in this file

//1.
const fiveToOneHundred = () => {
    for (let i =5; i < 101; i++) {
        console.log(i);
    }
};
fiveToOneHundred();

//2.
const multiplesOfThree = () => {
    
    for (let i =0; i <101; i++) {
        if (i % 3 === 0){
          console.log(i);
        };
    }
};

multiplesOfThree();

//3
const multiplesOfThreeOrFive = () => {
    for (let i = 3; i < 101; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            console.log(i)
        }
    }
};
multiplesOfThreeOrFive();

//4
//const unitlNum = (num) => {
    //for (let i = 0; i <= num)
//}