///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the last week at an apple orchard. 
    You will be using your coding skills to gain insights into its daily 
    operations.

    Below are three arrays each containing 7 numbers. You will use them and the 
    price variables to complete the problems in this file.

    The indexes of the arrays correspond with a day of the week.
    The first array is named fujiAcres. Notice that the first item in this array 
    is 2, meaning that 2 acres of Fuji apples were picked on Monday of this week.
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]





// PROBLEM 1

/*
    Using a for loop, calculate the total number of acres picked for the entire 
    week.

    Save the number to a variable called `totalAcres`.
    Log `totalAcres` to the console.
*/
// Create a nested list to store variables can loop through each elements of 3 arrays at the same time
const totalApples = [ 
    fujiAcres,
    galaAcres,
    pinkAcres,
];
// Using for loop to loop through each elements and make the total
totalAcres = 0;
for (const row of totalApples) { // get to index of totalApples
    for (const num of row) {    // get to index of each type of apple
        totalAcres += num;
    }
}
console.log(totalAcres);


// PROBLEM 2

/*
    Using `totalAcres`, calculate the average number of acres picked per day. 

    (Remember that the average is the total divided by the number of days)

    Save the answer to a variable called 
    `averageDailyAcres`, and log `averageDailyAcres` to the console.
*/

// calculate the average number of arces pick per day
const averageDailyAcres = totalAcres / fujiAcres.length;
console.log(averageDailyAcres);



// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number of acres that still have apples left. 
    
    The `days` variable represents how many more days of work are left. It's 
    initialized at 0 because we're going to be using it as a counter.
    
    Write a while loop that will continue to run while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to calculate this number. You might
    think about other ways you could do it more mathematically.
*/

// using while loop to add days and subtract acresLeft at the same time
let acresLeft = 174;
let days = 0;
while (acresLeft > 0) {
    acresLeft -= averageDailyAcres; // 174 - 9 = 165 && day = 0 + 1
    days += 1;
}
console.log(days);



// PROBLEM 4

/*
    Your next task is to create 3 arrays that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store your new arrays. Make sure that you
    don't modify the original arrays on lines 36 - 38.

    Log each of your arrays to the console.

    (Hint: loop over the original arrays, calculate the tons for that day, then
    add that number into the new list)
*/
const acreYields = 6.5;
let fujiTons = [];
let galaTons = [];
let pinkTons = [];

// using const of to loop through the acre in each variable and multiply it with 6.5 tons of apples
for (const acre of fujiAcres) {
    fujiTons.push(acre * acreYields);
}
console.log(fujiTons);// log it

for (const acre of galaAcres) {
    galaTons.push(acre * acreYields);
}
console.log(galaTons);

for (const acre of pinkAcres) {
    pinkTons.push(acre * acreYields);
}
console.log(pinkTons);





// PROBLEM 5

/*
    Next, calculate the TOTAL number of pounds picked per variety.

    You'll need to add up the tons per each variety and convert the number 
    into pounds -- store that number in the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// using for loop to loop through each ton of apple per day and convert it to pound 
// by multiply each day ton to 2000 because 1 ton = 2000 pounds
let totalFuji = 0;
for (const ton of fujiTons) {
    totalFuji += (ton * 2000);
}
console.log(totalFuji);

let totalGala = 0;
for (const ton of galaTons) {
    totalGala += (ton * 2000);
}
console.log(totalGala);

let totalPink = 0;
for (const ton of pinkTons) {
    totalPink += (ton * 2000);
}
console.log(totalPink);

// PROBLEM 6

/*
    Now that you know the total pounds per variety, use the prices below to 
    figure out how much you'll make from selling each type of apple. 

    The prices are per pound and are written in cents. 

    Log each of the profits to the console. 
*/
const fujiPrice = .89;
const galaPrice = .64;
const pinkPrice = .55;
// get the profit of each type of apple by multiplying total pounds per type to its price
let fujiProfit = totalFuji * fujiPrice;
console.log(fujiProfit);

let galaProfit = totalGala * galaPrice;
console.log(galaProfit);

let pinkProfit = totalPink * pinkPrice;
console.log(pinkProfit);



// PROBLEM 7

/*
    Add up all your profits and save  the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/
// calculate total profit by summing up all profits for apple's types
let totalProfit = fujiProfit + galaProfit + pinkProfit;
console.log(totalProfit);
