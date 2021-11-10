// const square = function (x) {
//     return x * x
// };

// const square = (x) => {
//     return x * x
// }
//
// const square = (x) => x * x
//
// console.log(square(3))

const event = {
    name: 'Birthdat party',
    guestList: ['Jane', 'Jamsly', 'Doe'],
    printGuestList() {
        console.log('Guest list for ' + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + ' attending for the ' + this.name)
        })
    }
}

event.printGuestList()