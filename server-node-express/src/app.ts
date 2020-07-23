console.log('server is loading ...');

// do not use this because you will not get auto completion const express = require('express');
import express, { json } from 'express';
import todosRouter from './routes/todos';


const app = express();
app.use(express.json());

const PORT = 8080;

app.use('/todos',todosRouter);



app.listen(PORT, () => console.log(`server is listening on port : ${PORT}`));


