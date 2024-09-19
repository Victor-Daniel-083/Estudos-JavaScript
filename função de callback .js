const test1 = () => {
    setTimeout(() => {
        console.log("TEST1");
    }, 1000)
}

const test2 = () => {
    setTimeout(()=>{
        console.log('TEST2');
    }, 900)
}

const test3 = () => {
    setTimeout(()=>{
        console.log('TEST3');
    }, 800)
}

const test4 = () => {
    setTimeout(()=>{
        console.log('TEST4');
    }, 700)
}

test1()
test2()
test3()
test4()
