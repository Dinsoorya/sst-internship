const readline=require("readline")
.createInterface
({
    input:process.stdin,
    output:process.stdout,
});
function avg()
{
readline.question("enter first number:",(n1)=>{
    readline.question("enter second number:",(n2)=>{
        let x=parseInt(n1)
        let y=parseInt(n2)
        var avg=(x+y)/2
        console.log("the average of triangle is:",+avg);
        readline.close();
    })
});
}
avg();
