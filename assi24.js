const readline=require("readline")
.createInterface({
    input:process.stdin,
    output:process.stdout,
});
readline.question("enter the student name:",(std)=>{
    readline.question("enter the rollnumber:",(roll)=>{
        readline.question("enter the age:",(ag)=>{
            readline.question("enter the class:",(cls)=>{
                var details={
                    name:(std),
                    roll:(roll),
                    age:(ag),
                    class:(cls),
                }
                const student=function(){
                    console.log(details);
                    
                    
                }
                student();
                readline.close();

            })
        })
    })
});  
        