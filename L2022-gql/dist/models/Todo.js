import mongoose from "mongoose";
const TodoSchema = new mongoose.Schema({
    description: {
        type: String,
        required: [true, "please give me title!"]
    },
    isDone: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });
export const Todo = mongoose.model("Todo", TodoSchema);
