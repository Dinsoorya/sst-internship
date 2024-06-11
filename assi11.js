const readline=require("readline")
.createInterface({
    input:process.stdin,
    output:process.stdout,
});
readline.question("enter the length of side a:",(a)=>{
    readline.question("enterv the length of side b:",(b)=>{
         let x=parseInt(a)
         let y=parseInt(b)
         var area=(0.5*(x*y));
         console.log("the area of triangle is:" +area);
         readline.close();
    });
});
