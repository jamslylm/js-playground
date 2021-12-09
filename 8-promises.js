/*
const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('This is an error!')
        resolve([4, 5, 2])
    }, 2000)
})

doWorkPromise.then((result) => {
    console.log('Success!', result)
}).catch((error) => {
    console.log('Error!', error)
})*/

// Working promise
const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 2000);
    });
};

// Without promise chaining
/*
add(1, 9).then((sum) => {
    console.log(sum)
    add(sum, 8).then((result) => {
        console.log(result)
    }).catch((er) => {
        console.log(er)
    })
}).catch((e) => {
    console.log(e)
})*/

// With promise chaining
add(5, 8)
    .then((sum) => {
        console.log(sum);
        return add(sum, 5);
    })
    .then((result) => {
        console.log(result);
    })
    .catch((er) => {
        console.log(er);
    });
