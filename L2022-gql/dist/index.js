import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { connectDb } from "./config/db.js";
import { typeDefs } from "./gql/typeDefs.js";
import { resolvers } from "./gql/resolvers.js";
// const app: Express = express();
connectDb();
// interface Msg {
//   text: string;
//   author: string;
// }
// const messages: Msg[] = [
//   {
//     text: "message1",
//     author: "gansukh",
//   },
//   {
//     text: "message 2",
//     author: "enku",
//   },
// ];
// const typeDefs = `#graphql
//     type Message {
//         description: String
//         isDone: Boolean
//         # text: String
//         # author: String
//     }
//     type Query {
//         # messages(author: String): [Message]
//         messages: [Message]
//     }
//     input MessageInput {
//         description: String
//         isDone: Boolean
//     }
//     type Mutation {
//         sendMessage(input: MessageInput): [Message]
//     }
// `;
// const resolvers = {
//   Query: {
//     messages: () => getTodo
//   },
//   // Query: {
//   //   messages: (_: any, args: any, context: any) => {
//   //     console.log(args.author);
//   //     let res: Msg[] = [];
//   //     for (let msg of messages) {
//   //       if (msg.author === args.author) {
//   //         res.push(msg);
//   //       }
//   //     }
//   //     return res;
//   //   },
//   // },
//   Mutation: {
//     sendMessage: (_: any, args: any, context: any) => {
//       createTodo 
//       console.log(args);
//       messages.push(args.input);
//       return messages;
//     },
//   },
// };
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
console.log(`${url}`);
