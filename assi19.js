const readline=require("readline")
.createInterface
({
    input:process.stdin,
    output:process.stdout,
});

readline.question("enter the first word :",(fw)=>{
    readline.question("enter the second word:",(sw)=>{
        if(fw==sw){
            console.log("both are same");
        }
        else{
            console.log("they are not same");
        }
        readline.close();
    })
})
