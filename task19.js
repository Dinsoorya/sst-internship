const readline=require("readline")
.createInterface({
    input:process.stdin,
    output:process.stdout,
});
readline.question("enter the number to be multiplied:",(a)=>{

for(let i=1;i<=10;i++)
    {
    mult=i*a
    console.log(""+i+"x"+a+"="+mult);
    }
    readline.close();
});