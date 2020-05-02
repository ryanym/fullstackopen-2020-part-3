const mongoose = require('mongoose')

if ( process.argv.length<3 ) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

let addMode = false
let name
let number
if (process.argv.length == 5){
  addMode = true
  name = process.argv[3]
  number = process.argv[4]
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const url =
`mongodb+srv://ryanym:${password}@cluster0-rkdal.mongodb.net/phonebook?retryWrites=true&w=majority`
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const phonebookSchema = new mongoose.Schema({
  name: String,
  number: String,
  id: Number,
})

const Person = mongoose.model('Person', phonebookSchema)

if (addMode) {
  const person = new Person({
    name: name,
    number: number,
    id: getRandomInt(1000),
  })

  person.save().then(response => {
    console.log(`added ${name} number ${number} to phonebook`)
    mongoose.connection.close()
  })
} else {
  Person.find({}).then(result => {
    console.log('phonebook:')
    result.forEach(person => {
      console.log(person.name,' ', person.number)
  })
  mongoose.connection.close()
})
}


