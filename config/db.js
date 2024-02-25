const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connt= await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected ${connt.connection.host}`.blue.underline.bold);
    } catch (error) {
        console.log(`Error: ${error.message}`.red);
        process.exit(1);
    }
}

module.exports=connectDB;