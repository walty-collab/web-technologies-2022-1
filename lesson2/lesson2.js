const students=[
    {name: 'Pavel', age: 20},
    {name: 'Ivan', age: 20},
    {name: 'Adem', age: 20},
    {name: 'Denis', age: 20},
    {name: 'Victoria', age: 20},
    {age: 40},
]

function pickPropArray(students, key)
{
    const result = [];
    for (let i = 0; i < students.length; i++) {
        const obj = students[i];
        if (obj[key]!==undefined) result.push(obj[key]);
    }
    return result;
}
const createCounter = pickPropArray(students, 'name');
console.log(createCounter);
