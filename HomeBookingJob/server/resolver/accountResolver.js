const {Account , Avatar} = require('../models/AccountRegister');
const jwt = require('jsonwebtoken');
const mongoDataMethod = require('../data/db');
const { Icon } = require('../models/image');



const account_resolvers = {

  Query : {
    getUserNamebyID: async (parent, { id }, mongoDataMethods) => {
     
      return await mongoDataMethod.getUserName(id);
    },

    getAllUser : async  (parent, args, { mongoDataMethods }) =>   await mongoDataMethod.getAllUser(),
    

  },



  Mutation: {
    registerAccount: async (_, { input }) => {
    
     const {
      username ,
      password ,
      name ,
      email ,
      address ,
      gender,
      age ,
      phone ,
      avatar,
      status

     } = input ;
     const createAvatar = await Avatar.create(avatar)

      return await Account.create({ 
        username ,
        password ,
        name ,
        email ,
        address ,
        gender,
        age ,
        phone ,
        avatar : createAvatar,
        status
      }) ;
    },
    creatAvatar : async (_, {input}) => {
      const {name , data , showIn} = input ;
      return await Avatar.create({name , data , showIn});
    },
    


  

login: async (parents, args, context, info) => {
  const account = await Account.findOne({
    username: args.input.username,
    password: args.input.password,
  });
  if (!account) {
    throw new Error('Invalid username or password');
  }

  // Tạo token
  const token = jwt.sign({ accountId: account._id , name : account.name}, 'your_secret_key', { expiresIn: '1h' });


  // Gửi token cho client, ví dụ làm phản hồi của mutation login
  return {
    token,
  
  };
},

  },

  AccountRegister : {
    avatar : async (parent) => {
      return await Avatar.findById(parent.avatar)
    }
  }
};

module.exports = account_resolvers;
