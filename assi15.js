const readline=require("readline")
.createInterface
({
    input:process.stdin,
    output:process.stdout,
});
readline.question("enter a word:",(word)=>{
    readline.question("enter a number:",(number)=>{
        console.log("the word is:",word);
        console.log("the number is:",number);
        readline.close();
    })
})