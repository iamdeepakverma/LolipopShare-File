import express from 'express';
import dotenv from 'dotenv';
import router from './routes/route.js';
import cors from 'cors';
import FileuploadDatabase from './config/db.js';

const app = express();

app.use(cors());
app.use('/', router);

dotenv.config();
const PORT = process.env.PORT || 5000;

FileuploadDatabase();

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});