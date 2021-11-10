const fs = require('fs')

const bufferedData = fs.readFileSync('1-json.json')
const jsonData = bufferedData.toString()
const data = JSON.parse(jsonData)

data.name = 'Jamsly'
data.age = 23

const modifiedData = JSON.stringify(data)
fs.writeFileSync('1-json.json', modifiedData)