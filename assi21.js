function sum(x,y,callback)
{
    
    a=x+y;
    callback();
}
function addnumbers()
{
    console.log("the sum of two numbers:"+a)

}
sum(5,6,addnumbers);