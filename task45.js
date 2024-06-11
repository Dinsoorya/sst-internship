function modifyobject(obj)
{
    obj.value=100
    console.log("inside function:",obj.value);
}
let myobj={value:50}
console.log("before function call:",myobj.value);
modifyobject(myobj);
console.log("after function call:",myobj.value);