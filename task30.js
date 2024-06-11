function digi(x)
{
    let a=0;
    while(x>0)
        {
            a+=x%10;
            x=parseInt(x/10);
            
    
}
    console.log(a);
}
digi(534);