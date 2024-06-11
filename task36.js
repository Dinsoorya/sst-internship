const readline=require("readline")
.createInterface({
    input:process.stdin,
    output:process.stdout,
})
readline.question("enter a number:",(num)=>{
    function square(){
        a=(num*num);
        return a;


    }
    let z=square(num)
    console.log(z);
    readline.close();
});