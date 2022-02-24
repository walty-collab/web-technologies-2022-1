const result1 =spinWords("Привет от Legacy")
const result2 = spinWords( "This is a test" )

function spinWords(string){
    let stringarray = string.split(" ");
    for (let i = 0; i < stringarray.length; i++) {
        if (stringarray[i].length >= 5) {stringarray[i]= stringarray[i].split("").reverse().join("");}
    }
    let res = stringarray.join(" ");
    return res;
}

console.log(result1 );
console.log(result2 );