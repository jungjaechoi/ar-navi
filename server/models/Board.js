import mongoose from "mongoose";

const boardSchema = new mongoose.Schema({
    title: {type: String, required: true},
    contents: {type: String, required: true},
    date: {type: JSON, required: true}
})

const Board = mongoose.model('Board', boardSchema);
export default Board; 