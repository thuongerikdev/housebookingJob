const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AccountRegisterSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique : true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  avatar : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'Avatar',
    require : true
  }
});
const AvatarSchema = new Schema ({
  name : {
    type : String,
    require : true ,
  },
  data : {
    type : String ,
    require : true
  },
  showIn : {
    type : String ,
    reuire : true
  }


})
const Account = mongoose.model('User' , AccountRegisterSchema);
const Avatar = mongoose.model ('Avatar' , AvatarSchema);

module.exports = {Account , Avatar}
