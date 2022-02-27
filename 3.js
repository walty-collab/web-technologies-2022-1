function spinWords(string)
{
    //let arrayOfStrings = stringToSplit.split(string);
     let array = [];
    for(const el of string)
    {
        array.push(el);        
    } 
    return array;
}



const result1 = spinWords( "Привет от Legacy" )
console.log(result1) // тевирП от ycageL

const result2 = spinWords( "This is a test" )
console.log(result2) // This is a test
