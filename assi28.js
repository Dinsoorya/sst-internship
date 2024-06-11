class area
{
    constructor(len,wid)
    {
        this.len=len;
        this.wid=wid;
    }

Rect()
{
    const ar=this.len+this.wid;
    return ar;
}
}
const angle=new area(4,5);
console.log("the rectangle of area:"+angle.Rect());