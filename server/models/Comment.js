import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    id: {type: String, required: true},
    comment: {type: String, required: true},
    date: {type: JSON, required: true}
})

const Comment = mongoose.model('Comment', commentSchema);
export default Comment; 