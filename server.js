import express from 'express';
import helloController from './controllers/hello-controller.js';
import tuitsController from './controllers/tuits-controller.js';
import userController from './controllers/user-controller.js';
import cors from 'cors';
import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://tuiter:tuiter@cluster0.vosdy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

const app = express();
app.use(cors());
app.use(express.json());
helloController(app);
userController(app);
tuitsController(app);
app.listen(process.env.PORT || 4000);