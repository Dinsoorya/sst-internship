const rl=require("readline")
.createInterface({
    input:process.stdin,
    output:process.stdout,
});

rl.question("enter the first number\n",(num1)=>{
    rl.question("enter the second number\n",(num2)=>{
    const n1=parseInt(num1)
    const n2=parseInt(num2)
    sum=n1+n2;
    sub=n1-n2;
    mul=n1*n2;
    div=n1/n2;
    mod=n1%n2;
    console.log("the sum of your number is "+ sum+" . ");
    console.log("the sub of your number is "+ sub+" .");
    console.log("the multi of your number is "+ mul+" .");
    console.log("the div of your number is " + div+" . ");
    console.log("the mod of your number is "+ mod+" . ");
    

    

    rl.close();
   });
});

