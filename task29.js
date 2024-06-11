const readline=require("readline")
.createInterface({
    input:process.stdin,
    output:process.stdout,
});

    readline.question("enter the height of the rectangle:",(hei)=>{
        readline.question("enter the width of the rectangle:",(wid)=>{

            let d=parseInt(hei)
            let f=parseInt(wid)

            function area(a,b){
            ar =(a*b)
            console.log("the area of the rectangle is:",ar);
        
            }
            area(d,f);
            readline.close();
        });
    });
    

