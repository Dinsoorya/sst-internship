const person={
    fullname:function(city,country)
    {
        return this.firstname+" "+this.lastname+" "+" "+city+" ,"+country;
    }
}
const person1={
    firstname :"dinsu",
    lastname:"kulukki",
}
console.log(person.fullname.call(person1,"india","norway"));