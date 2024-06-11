const readline=require("readline")
.createInterface({
    input:process.stdin,
    output:process.stdout,
})
readline.question("enter a desimal value:",(des)=>{
    function baba(des)
    {
        let a=parseInt(des)
        return a;
    }
    {
        var x=baba(des)
        console.log(x);
        readline.close();
    }
})