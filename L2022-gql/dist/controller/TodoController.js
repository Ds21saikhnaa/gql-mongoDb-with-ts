import { Todo } from "../models/Todo.js";
export const createTodo = async (req, res) => {
    const todo = await Todo.create(req.body);
    res.status(200).json({
        success: true,
        data: todo
    });
};
export const getTodo = async (req, res) => {
    const todos = await Todo.find();
    res.status(200).json({
        success: true,
        data: todos
    });
};
// export const updateTodo = async (req: Request, res: Response) => {
//   const todo = await Todo.findById(req.params.id);
//   if(!todo){
//     throw new MyError("iim user bhgui bn!", 404);
//   }
//   for (let to in todo) {
//     todo[to] = req.body[to];
//   }
// }
