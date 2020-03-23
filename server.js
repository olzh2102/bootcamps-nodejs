const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')

// route files
const bootcamps = require('./routes/bootcamps.routes')

// load env vars
dotenv.config({ path: './config/config.env' })

const app = express()

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'))
}

// mount routers
app.use('/api/v1/bootcamps', bootcamps)

app.get('/', (req, res) => {
	res.json({ text: 'Hello from Express, mofo' })
})

const PORT = process.env.PORT || 5000
app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
	)
)
