const express = require('express');
const app = express();
const dbConnect = require('./database/index')
const {PORT} = require('./config/index')
const router = require('./routes/index');
const errorHandler = require('./middleware/errorhandler');
const cookieParser = require('cookie-parser')


app.use(express.json());
app.use(router);
app.use(cookieParser())
app.use('/storage', express.static('storage'))


dbConnect()

app.get('/', (req, res) => {
    res.json({msg: 'Hello World!'});
})


app.use(errorHandler)
app.listen(PORT, console.log(`App is running on ${PORT}`));