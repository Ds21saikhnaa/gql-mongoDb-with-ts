import { Todo } from "../models/Todo.js";
export const resolvers = {
    Query: {
        async todo(_, { ID }) {
            return await Todo.findById(ID);
        }
    },
    Mutation: {
        async createTodo(_, { todoInput }) {
            console.log(todoInput);
            const todo = await Todo.create(todoInput);
            return todo;
        }
    }
};
