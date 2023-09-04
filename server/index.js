import express from 'express';
import Connection from './database/db.js';
import cors from 'cors';
import Routes from './routes/route.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', Routes);
Connection();
const PORT = 3001;

app.listen(PORT, () => console.log(`Server running at ${PORT} `));