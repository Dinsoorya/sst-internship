(function()
{
    console.log("this is an IIFE");
})();
(function(name)
{
    console.log("hello,"+name+"!");
})("alice");