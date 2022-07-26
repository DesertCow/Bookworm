

const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');


const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');


const app = express();
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
});


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once('open', () => {
    app.listen(PORT, () => {
      // console.log(`🌍 Now listening on localhost:${PORT}`)
      console.log(`\n\n\n----------------------------------------------`);
      console.log(`| 💡     Database Connection:  \x1b[32mOnline\x1b[0m     💡 |`);
      console.log(`| 🚀  Live API: \x1b[34mhttp://localhost:${PORT}/api\x1b[0m 🚀 |`);
      console.log(`----------------------------------------------\n\n\n`);
    });
  });
};

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);