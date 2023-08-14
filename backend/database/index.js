const mongoose = require('mongoose');
const {MONGODB_CONNECTION_STRING} = require('../config/index');
const dotenv = require("dotenv");
require("dotenv").config();

const connectionString = "mongodb+srv://4june:zarish@cluster0.zg4zjqp.mongodb.net/coin-market?retryWrites=true&w=majority"

dotenv.config();

const dbConnect = async () => {
    try {
        mongoose.set('strictQuery', false);
        const conn = await mongoose.connect(connectionString);
        console.log(`Database connected to host: ${conn.connection.host}`);
        
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

module.exports = dbConnect;