import express from 'express'
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors'
import mongoose from 'mongoose';
import router from './router.js';
import FileUpload from './FileUpload.js';
import axios from 'axios';


const app = express()
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename); //Использование директории проекта
app.use(cors())
app.use(express.json()) //Это нужно для того чтобы express читал json формат
app.use(express.static(__dirname)); //Для тоого чтобы можно было использовать статические файлы css html
app.use(FileUpload)
app.use(router)



async function StartApp()
{
    await mongoose.connect("mongodb://localhost:27017/ReactNodeJS")
    app.listen(5000,() => console.log("server works"))
}

StartApp()
