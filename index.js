import express from 'express';

const app = express();

app.listen(5001, () => console.log('API running'))

app.get('/', (req, res) => res.json('My Api Running'))