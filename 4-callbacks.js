/*
const geoCode = (address, callback) => {
    setTimeout(() => {
        const data = {
            lat: 15,
            long: -54
        }

        callback(data)
    }, 2000)
}

geoCode('lascahobas', (d) =>{
    console.log(d)
})


const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum)
})*/

/*
const name = (name, callback) => {
    callback('Hello ' + name)
}

name('Jamsly', (name) => {
    console.log(name)
})*/

const doWorkCallBack = (callback) => {
    setTimeout(() => {
        // callback('You see it, it\' my error!', undefined)
        callback(undefined, 'You see this, it\' my result!')
    }, 2000)
}

doWorkCallBack((error, result) => {
    if (error) {
        return console.log(error)
    }

    console.log(result)
})