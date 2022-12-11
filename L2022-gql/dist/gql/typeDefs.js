export const typeDefs = `#graphql
  type Todo {
    description: String
    isDone: Boolean
  }

  input TodoInput{
    description: String
  }

  type Query{
    todo(ID: ID!): Todo!
  }

  type Mutation{
    createTodo(todoInput: TodoInput): Todo!
    deleteTodo(ID: ID!): Boolean
    editTodo(ID: ID!, todoInput: TodoInput): Boolean
  }
`;
