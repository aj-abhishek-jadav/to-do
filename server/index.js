import express from 'express';
import Connection from './database/db.js';

const app = express();
Connection();
const PORT = 3001;

app.listen(PORT, () => console.log(`Server running at ${PORT} `));