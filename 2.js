function createCounter() {
    let count=0;
    return function () {
        count +=1;
        console.log(count)
    }
}

const counter1 = createCounter()
counter1() // 1
counter1() // 2

const counter2 = createCounter()
counter2() // 1
counter2() // 2