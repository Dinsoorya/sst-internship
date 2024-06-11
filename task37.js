const readline=require("readline")
.createInterface({
    input:process.stdin,
    output:process.stdout,
})
readline.question("enter the radius:",(rad)=>{
    function circle(){
        circle=Math.PI*Math.pow(rad,2);
        return circle;
    }
    {
        let a=circle(rad)
        console.log(a)
        readline.close();
    }
})