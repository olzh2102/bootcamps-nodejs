const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./config/db.config')

// load env vars
dotenv.config({ path: './config/config.env' })

// connect to DB
connectDB()

// route files
const bootcamps = require('./routes/bootcamps.routes')

const app = express()

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'))
}

// mount routers
app.use('/api/v1/bootcamps', bootcamps)

const PORT = process.env.PORT || 5000
const server = app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
	)
)

// handle unhandled promise rejections
process.on(
	'unhandledRejection',
	(error, promise) => {
		console.log(`Error: ${error.message}`)

		// close the server and exit process
		server.close(() => process.exit(1))
	}
)
