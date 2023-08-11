const express = require('express');
const app = express();
const dbConnect = require('./database/index')
const {PORT} = require('./config/index')
const router = require('./routes/index');
const errorHandler = require('./middlewares/errorHandler');
const cookieParser = require('cookie-parser')
const cors = require('cors')

const corsOptions = {

    credentials: true,
    origin:["http://localhost:3000"]
}
app.use(express.json());
app.use(router);
app.use(cookieParser())
app.use(cors(corsOptions))
app.use('/storage', express.static('storage'))


dbConnect()

app.get('/', (req, res) => {
    res.json({msg: 'Hello World!'});
})


app.use(errorHandler)
app.listen(PORT, console.log(`App is running on ${PORT}`));