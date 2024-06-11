const drom=function(x)
{
    let out=x.split('').reverse('').join('');
    if (x===out)
    {  
        let result;
        result=(" it is a palinedrom")
        var ad=x+result
        return ad;
    }
    else{

        let result;
        result=(" it is not a palinedrom")
        var bc=x+result
        return bc;
        
    }

}
var z=drom("malayalam")
console.log(z);