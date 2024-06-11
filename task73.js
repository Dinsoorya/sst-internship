var arr1=[1,2,3,4,5];
var arr2=[5,6,7,8,9];
var combine=[];
for(var i=0;i<arr1.length;i++)
{
    combine[combine.length]=arr1[i];
}
for(var j=0;j<arr2.length;i++)
{
    combine[combine.length]=arr2[j];
}
 var uniqueElement=[];
 for(var k=0;k<combine.length;k++)
 {
     var element=combine[k];
     var count=0;
 
 for(var l=0;l<combine.length;l++)
    {
        if(combine[l]===element)
            {
                count++;
            }
    }

    if (count===1)
        {
            uniqueElement[uniqueElement.length]=element;
        }
    } 
          console.log(uniqueElement);