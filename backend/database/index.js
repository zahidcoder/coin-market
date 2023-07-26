const mongoose = require('mongoose')
const {MONGODB_CONNECTION_STRING} = require ('../config/index')

const connectionString = "mongodb+srv://4june:coinmarket@cluster0.zg4zjqp.mongodb.net/coin-market?retryWrites=true&w=majority"

const dbConnect = async (req, res) => {
console.log(`Database connected to host `)
    try {
     await mongoose.connect(connectionString)
       
    } catch (error) {
        console.log(`Error: ${error}`)
    }

}

module.exports = dbConnect