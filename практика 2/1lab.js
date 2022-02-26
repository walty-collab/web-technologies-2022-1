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
    students.forEach(element => Array.push(element[arg]));
}

const result = pickPropArray(students, 'name')
console.log(result) 
