const mongoose = require('mongoose');

const connectDB = async () => {
	const conn = await mongoose.connect(process.env.MONGODB_URI);
	console.log(`MongoDB connected: ${conn.connection.host}`);
};

mongoose.set('strictQuery', true)

module.exports = connectDB;
