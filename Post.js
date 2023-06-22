import mongoose from 'mongoose';

const schema = new mongoose.Schema({ 
    author: {type: String, required: true},
    content: {type: String, required: true},
    title: {type: String, required: true},
    image: {type: String, required: true},
    date: String
})
const post = mongoose.model('Post3',schema) 

export default post