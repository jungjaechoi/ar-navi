import mongoose from "mongoose";

const boardSchema = new mongoose.Schema({
    email: {type: String, required: true},
    title: {type: String, required: true},
    contents: {type: String, required: true}
})

const Board = mongoose.model('Board', boardSchema);
export default Board; 