import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";
const server = new GraphQLServer({
// Configurations go here
// Schema
typeDefs:"graphql/schema.graphql",
resolvers
});
server.start(() => console.log("GraphQL Server Running"));