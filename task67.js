//create an array of numbers
const numbers=[1,2,3,4,5];
//function to display each number
function displaynumber(number,index){

    console.log("index: "+(index),"value: "+(number));
};
numbers.forEach(displaynumber);