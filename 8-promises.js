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
})