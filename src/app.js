import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import mocksRouter from './routes/mocks.router.js';
import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';


const app = express();
const PORT = process.env.PORT||8080;
//string de conexión a la BBDD de MongoDB Atlas
const connection = mongoose.connect(`mongodb+srv://juandeargentina:codernameJT@cluster0.o6o5g.mongodb.net/adoptme?retryWrites=true&w=majority&appName=Cluster0`);

app.use(express.json());
app.use(cookieParser());

app.use('/api/mocks', mocksRouter);
app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))


export default app;
