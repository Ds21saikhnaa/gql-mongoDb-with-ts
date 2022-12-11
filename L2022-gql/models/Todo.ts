import mongoose from "mongoose";
import { TodoF } from "../interface";

const TodoSchema = new mongoose.Schema<TodoF>(
  {
    description: {
      type: String,
      required: [true, "please give me title!"]
    },
    isDone: {
      type: Boolean,
      default: false
    }
  }, { timestamps: true }
);

export const Todo = mongoose.model("Todo", TodoSchema);