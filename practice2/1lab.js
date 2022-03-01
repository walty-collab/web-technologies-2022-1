const students = [
    { name: 'Павел', age: 20 },
    { name: 'Иван', age: 20 },
    { name: 'Эдем', age: 20 },
    { name: 'Денис', age: 20 },
    { name: 'Виктория', age: 20 },
    { age: 40 },
]

function pickPropArray(students,arg)
{
    let Array = [];
    for(const el of students)
    {
        if(el[arg]!= undefined){
            Array.push(el[arg]);
        }
    }
    return Array;
}

const result = pickPropArray(students, 'name')
console.log(result) 
