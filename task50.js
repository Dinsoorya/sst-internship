const greet=function(name)
{
    return "hello," +name+"!";
};
function displaygreeting(greetingfunction)
{
    console.log(greetingfunction("john"));
}
console.log(greet("dinsu"));
displaygreeting(greet);