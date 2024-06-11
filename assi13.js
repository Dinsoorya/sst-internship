const readline=require("readline")
.createInterface({
    input:process.stdin,
    output:process.stdin,
});
readline.question("give the range to print even numbers",(n)=>{
    var num=parseInt(n)
    for(i=1;i<=num;i++)
        {
            if(i%2==0)
                {
                    console.log(i);
                }
        }
        readline.close();
});