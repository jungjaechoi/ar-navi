import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    index: {type: Int, required: true, unique: true},
    contents: {type: String, required: true}
})

const Comment = mongoose.model('Comment', commentSchema);
export default customElements; 