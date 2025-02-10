//Task 1: Function Declaration

function calculateProfit(costPrice, sellingPrice, unitsSold){   //declared a function with 3 variables that calculates profit

    return (sellingPrice - costPrice) * unitsSold;
};

console.log(`Total Profit: $${calculateProfit(20, 30, 100)}`); //logged total profit for 2 sets of numbers
console.log(`Total Profit: $${calculateProfit(50, 70, 200)}`);

//Task 2: Function Expression

function calculateSalesTax(amount, taxRate){    //declared a function that multiplies amount by sales tax and used to fixed to round to 2 decimals

    return (amount * taxRate).toFixed(2);
};

console.log(`Sales Tax: $${calculateSalesTax(100, 0.07)}`); //logged the output for the given sets of numbers
console.log(`Sales Tax: $${calculateSalesTax(500, 0.01)}`);


//Task 3: Arrow Function

let calculateBonus = (salary, performanceRating) => { //declared an arrow function with if else statement

    let bonus = 0;
    
    if (performanceRating == "Excellent") {     //used if else statement to assign the right bonus percentage 
        bonus = 0.2;
    } else if (performanceRating == "Good") {
        bonus = 0.1;
    }else if(performanceRating == "Average"){
        bonus = 0.05;

    
    }
    let salary_total = salary * bonus;  //calculated the bonus amount after one of the categories is satisfied
    return salary_total;
};    

console.log(calculateBonus(5000, "Excellent")); //logged the expected bonuses
console.log(calculateBonus(7000, "Good"));
console.log(calculateBonus(4000, "Average"));
