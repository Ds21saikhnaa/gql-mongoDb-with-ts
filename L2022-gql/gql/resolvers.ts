import { Todo } from "../models/Todo.js";

export const resolvers = {
  Query: {
    async todo(_: any, { ID }: any) {
      return await Todo.findById(ID);
    }
  },
  Mutation: {
    async createTodo(_: any, { todoInput }: any) {
      console.log(todoInput);
      const todo = await Todo.create(todoInput);
      return todo;
    }
  }
}