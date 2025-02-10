//Task 1: Function Declaration

function calculateProfit(costPrice, sellingPrice, unitsSold){   //declared a function with 3 variables that calculates profit

    return (sellingPrice - costPrice) * unitsSold;
};

console.log(`Total Profit: $${calculateProfit(20, 30, 100)}`); //logged total profit for 2 sets of numbers
console.log(`Total Profit: $${calculateProfit(50, 70, 200)}`);

