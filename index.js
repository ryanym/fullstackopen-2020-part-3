const express = require('express')
const app = express()
const morgan = require('morgan')

morgan.token('data', function (req, res) {
	return JSON.stringify(req.body)
})
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :data'))

let persons = [
	    { 
	      "name": "Arto Hellas", 
	      "number": "040-123456",
	      "id": 1
	    },
	    { 
	      "name": "Ada Lovelace", 
	      "number": "39-44-5323523",
	      "id": 2
	    },
	    { 
	      "name": "Dan Abramov", 
	      "number": "12-43-234345",
	      "id": 3
	    },
	    { 
	      "name": "Mary Poppendieck", 
	      "number": "39-23-6423122",
	      "id": 4
	    }
]

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

app.get('/info', (req, res) => {
	const total = persons.length
	res.send(`
    <p>Phonebook has info for ${total} people</p>
    <p>${new Date()}</p>
  `)
})

app.get('/api/persons', (req, res) => {
	res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
	const id = Number(req.params.id)
	const person = persons.find(p => p.id === id)

	if (person) {
		res.json(person)
	} else {
		res.status(404).json({
			error: `person with id: ${id} not found` 
		})
	}
})

app.delete('/api/persons/:id', (req, res) => {
	const id = Number(req.params.id)
	const person = persons.find(p => p.id === id)

	console.log(person)
	if (person) {
		persons = persons.filter(p => p.id !== id)
		res.status(204).end()
	} else {
		res.status(400).json({
			error: `person with id: ${id} not found` 
		})
	}
})


app.post('/api/persons', (req, res) => {
	// const body = req.body
	const name = req.body.name
	const number = req.body.number

	if (name === undefined) {
		return res.status(400).json({
			error: `name is missing` 
		})
	}

	if (number === undefined) {
		return res.status(400).json({
			error: `number is missing` 
		})
	}

	const existPerson = persons.find(p => p.name === name)

	if (existPerson) {
		return res.status(400).json({
			error: `Name: ${name} already exists` 
		})
	}

	const person = {
		name: name,
		number: number,
		id: getRandomInt(1000)
	}

	persons = persons.concat(person)
	res.json(person)

})

const PORT = 3001
app.listen(PORT, ()=> {
	console.log(`Server running on port ${PORT}`)
})