require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')

morgan.token('data', function (req) {
	return JSON.stringify(req.body)
})
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :data'))
app.use(cors())
app.use(express.static('build'))


app.get('/info', (req, res) => {
	Person.count({})
				.then(count => {
						res.send(`
							<p>Phonebook has info for ${count} people</p>
					    <p>${new Date()}</p>`)
				})
	
})

app.get('/api/persons', (req, res) => {
	// res.json(persons)
	Person.find({}).then(result => {
    res.json(result)
  })
})

app.get('/api/persons/:id', (req, res, next) => {
	const id = String(req.params.id)
	console.log(id)
	Person.findById(id)
		.then(person => {
			if (person){
				res.json(person.toJSON())
			} else {
				res.status(404).json({
					error: `person with id: ${id} not found` 
				})
			}
		})
		.catch(error => next(error))
})

app.delete('/api/persons/:id', (req, res, next) => {
	const id = req.params.id
	Person.findByIdAndRemove(id)
				.then(person => {
					if (person) {
						res.status(204).end()
					} else {
						res.status(404).json({
							error: `person with id: ${id} not found` 
						})
					}
				})
				.catch(error => next(error))
})


app.post('/api/persons', (req, res, next) => {
	const name = req.body.name
	const number = req.body.number

	const person = new Person({
		name: name,
		number: number,
	})

	person.save()
		.then(savedPerson => {
			res.json(savedPerson.toJSON())
		})
		.catch(error => next(error))

})

app.put('/api/persons/:id', (req, res, next) => {
	const id = req.params.id
	const personUpdate = {
		name: req.body.name,
		number: req.body.number
	}

	Person.findByIdAndUpdate(id, personUpdate, {new: true, runValidators: true, context: 'query'})
			.then(person => {
				if (person) {
					res.json(person.toJSON())
				}
			})
			.catch(error => next(error))
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

// handler of requests with unknown endpoint
app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}
app.use(errorHandler)


const PORT = process.env.PORT || 3001
app.listen(PORT, ()=> {
	console.log(`Server running on port ${PORT}`)
})