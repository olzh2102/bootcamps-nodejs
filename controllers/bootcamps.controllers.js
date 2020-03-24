const Bootcamp = require('../models/Bootcamp.models')

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = async (req, res, next) => {
	try {
		const bootcamps = await Bootcamp.find()

		res.status(200).json({
			success: true,
			data: bootcamps
		})
	} catch (error) {
		res.status(400).json({
			success: false
		})
	}
}

// @desc    Get all bootcamp
// @route   GET /api/v1/bootcamp/:id
// @access  Public
exports.getBootcamp = (req, res, next) => {
	res.status(200).json({
		success: true,
		msg: `Show bootcamp ${req.params.id}`
	})
}

// @desc    Create bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
exports.createBootcamp = async (
	req,
	res,
	next
) => {
	try {
		const bootcamp = await Bootcamp.create(
			req.body
		)

		res.status(201).json({
			success: true,
			data: bootcamp
		})
	} catch (error) {
		res.status(400).json({
			success: false
		})
	}
}

// @desc    Update bootcamp
// @route   PUT /api/v1/bootcamp/:id
// @access  Private
exports.updateBootcamp = (req, res, next) => {
	res.status(200).json({
		success: true,
		message: `Update bootcamp ${req.params.id}`
	})
}

// @desc    Delete bootcamp
// @route   DELETE /api/v1/bootcamp/:id
// @access  Private
exports.deleteBootcamp = (req, res, next) => {
	res.status(200).json({
		success: true,
		msg: `Delete bootcamp ${req.params.id}`
	})
}
