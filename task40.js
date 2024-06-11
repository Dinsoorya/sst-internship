const readline=require("readline")
.createInterface({
    input:process.stdin,
    output:process.stdout,
})
readline.question("enter your year of birth:",(birth)=>{
    let today=new Date();
     age=today.getFullYear()-birth;
     console.log(age);
     readline.close();


})