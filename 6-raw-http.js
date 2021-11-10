const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=a78e8e27d1fab98a09bb5e4e74e5c136&query=40,-75&units=m'

const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data += chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {

})

request.end()