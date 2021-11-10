// Object property shorthand
const name = 'Jamsly'
const userAge = 23
const location = 'lascahobas'

const user = {
    name: name,
    age: userAge,
    location: location
}

console.log(user)

// Object destructuring
const product = {
    label: 'Red Notebook',
    price: 5,
    stock: 100,
    salePrice: undefined
}

// Normal way
// const label = product.label
// const stock = product.stock

// With destucturing
// const {label: productLabel, stock, rating = 0} = product
// console.log('Label:', productLabel, ',Stock:', stock, 'rating: ', rating, 'star(s)')

// Destructuring as function argument
const transaction = (type, {label, stock}) => {
    console.log(type, label, stock)
}

transaction('order', product)