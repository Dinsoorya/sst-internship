const readline=require("readline")
.createInterface({
    input:process.stdin,
    output:process.stdin,
});
function data()
{
    readline.question("what is your name: ",(name)=>{
        readline.question("what is your age: ",(age)=>{
            console.log("my name is "  +name);
            console.log("my age is  "+age);
            readline.close();

        });
});
}          
data();
    
