const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Book {
    _id: ID
    authors: [String]
    description: [String]!
    bookId: [String]!
    image: String
    link: String
    title: [String]!
  }

  type User {
    _id: ID
    username: [String]!
    email: [String]!
    bookCount: Int
    savedBooks: [Book]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    books: [Book]!
    book(BookId: ID!): Book
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    #saveBook([authors]: String!, description: String!, title: String!, bookid: String!, image: String!, link: String!): User
    removeBook(bookId: Int, email: String!, password: String!): User
  }
`;

module.exports = typeDefs;