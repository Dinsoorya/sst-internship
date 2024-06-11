const readline=require("readline")
.createInterface
({
    input:process.stdin,
    output:process.stdout,
});

function rect(){
    readline.question("enter the height:",(hei)=>{
        readline.question("enter the width:",(wid)=>{
            let x=parseFloat(hei)
            let y=parseFloat(wid)
            var area=(x*y)
            console.log("the area of the rectangle is ",+area);
            readline.close();
        })
    })
}
rect();