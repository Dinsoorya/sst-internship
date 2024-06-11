function changecarpricebyvalue(price)
{
    price=25000;
    console.log("inside function:",price);
}
let carprice;
carprice=20000;
console.log("before function call:",carprice);

changecarpricebyvalue(carprice);
console.log("before function call,carprice:",carprice);

