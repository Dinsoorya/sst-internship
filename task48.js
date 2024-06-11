function outerfunction()
{
    let outvar='iam outside!';
    
    function innerfunction()
    {
        console.log(outvar);
    }
    return innerfunction
}
const myclosure = outerfunction();
myclosure();