const rl=require("readline")
.createInterface
({
    input:process.stdin,
    output:process.stdout,
});    

rl.question("who are you?\n",(name)=>{
    rl.question("enter your age?\n",(age)=>{
        console.log("hey there"+name+"!");
        console.log("you are " +age+" old!!");

      rl.close();
    });
});



