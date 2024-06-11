function changecarpricebyreference(car)
{
    car.price=25000;
    console.log("inside the function,carprice:",car.price);
}
let car={
    model:"bmw",
    price:35000,
}
console.log("before function call,carmodel:",car.model);
console.log("before function call,carprice:",car.price);
changecarpricebyreference(car)
console.log("after function call,carmodel:",car.model);
console.log("after function call,carprice:",car.price);