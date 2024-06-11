const readline=require("readline")
.createInterface({
    input:Process.stdin,
    output:process.stdout,
})
let res=0;
readline.question("the calculated number is");
while(n>0){
    {
      res+=n%10;
      n=parseInt(n/10);
    }
    console.log("sum:"+result); 
}


