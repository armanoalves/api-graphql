const { ApolloServer } = require("apollo-server");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const { default: mongoose } = require("mongoose");
require("dotenv").config();

//Database
const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(process.env.DB_URL, dbOptions)
  .then(() => console.log("Database connected"))
  .catch((error) => console.log("Database failed: ", error));

//GraphQL
const server = new ApolloServer({ typeDefs, resolvers });

server
  .listen()
  .then(({ url }) => console.log(`Server ready at ${url}`))
  .catch(error => console.log("Server failed: ", error));