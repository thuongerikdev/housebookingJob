const { gql } = require('graphql-tag');

const typeDefs_account = gql`
  type AccountRegister {
    id: ID
    username: String!       
    password: String!
    name: String!
    email: String!
    address: String!
    gender: String!
    age: Int!
    phone: String!
    token : String
    avatar : avatar
    status : String



    
  }

  input RegisterAccountInput {
    username: String!
    password: String!
    name: String!
    email: String!
    address: String!
    gender: String!
    age: Int!
    phone: String!
    avatar : avatarInput
    status : String


  }
  type avatar {
    id : ID! 
    name : String
    data : String!
    showIn : String
  }
  input avatarInput {
    name : String
    data : String
    showIn : String
  }
  
  type profile {
    name: String!
    email: String!
    address: String!
    gender: String!
    age: Int!
    phone: String!
  }
  

  

  input profileInput {
    name: String!
    email: String!
    address: String!
    gender: String!
    age: Int!
    phone: String!
  }
  
  type Account {
    id : ID
    username: String!
    name: String!
    password : String!
    token : String
  }
  
  input LoginInput {
    username: String!
    password: String!
  }
  
  type Query {
    register: [AccountRegister]
    login: [Account]
    getUserNamebyID ( id: String!) : AccountRegister
    getAllUser : [AccountRegister]
  
  }
  
  type Mutation {
    registerAccount(input: RegisterAccountInput!): AccountRegister 
    login(input: LoginInput!): AccountRegister
    creatAvatar (input : avatarInput) : avatar
  }
`;

module.exports = typeDefs_account;
