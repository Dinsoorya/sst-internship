const person={
    firstname:"john",
    lastname:"doe",
    fullname:function()
    {
        return this.firstname+" "+this.lastname;
    }
}
const member={
    firstname:"dinsu",
    lastname:"praku",
}
let fullname=person.fullname.bind(member);
console.log(fullname());