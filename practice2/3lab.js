function spinWords(string)
{
    let arrayOfString = string.split(' ');
    let array = [];
    for (var i = arrayOfString.length-1; i >= 0; i--)
    {
        if(arrayOfString[i].length>5)
        {
            for(const el of arrayOfString[i])
            {
                array.unshift(el);
            }
        }
        else
            array.unshift(arrayOfString[i]);
        array.unshift(' ');
    }
    return array.join('');
}



const result1 = spinWords( "Привет от Legacy" )
console.log(result1) // тевирП от ycageL

const result2 = spinWords( "This is a test" )
console.log(result2) // This is a test