
const readline=require("readline")
.createInterface({
    input:process.stdin,
    output:process.stdout,
});
readline.question("enter the value in celcius:",(cel)=>{
    var cel=parseInt(cel)
    var fah=(9/5)*cel+32
    console.log("the fahrenheit value is " +fah);
    readline.close();
});
