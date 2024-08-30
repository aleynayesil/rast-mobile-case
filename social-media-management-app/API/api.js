const express = require('express');
const cors = require('cors');
const env = require('dotenv');
const db = require('./config/db');
const authRouter = require('./routes/authRoutes.js')
const crudRouter = require('./routes/crudRoutes.js')

env.config();

const app = express();

//Dışarıdan gönderilen verilein sorunsuz yazılabilbesi için gerekli işlemler
app.use(cors({
    credentials: true,
    origin: ["http://localhost:4200"]
}));
app.use(express.json());
app.use(express.urlencoded());

app.use('/api', authRouter);
app.use('/api', crudRouter);

const PORT = process.env.PORT || 3000;

db();

app.listen(PORT, () => {
    console.log("Server Connect: 3000");
});