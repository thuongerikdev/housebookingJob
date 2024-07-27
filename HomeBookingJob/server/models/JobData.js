
const mongoose = require ('mongoose')

const schema = mongoose.Schema

const jobSchema = new schema ({
    JobName : {
        type : String,
        required : true
    },
    JobType : {
        type : String ,
        required : true
    },
    
    price : {
        type : Number ,
        require : true
    },
    userId : {
        type : String 
    },
    status : {
        type : String
    },
    customerId : {
        type : String
    },
    people : {
        type : Number ,
        require : true
    },
    time : {
        type : Number , 
        require : true
    },
    note : {
        type : String ,
        require : true
    },
    moreOption : {
        type : Number ,
        require : true
    },
    
 

})
module.exports = mongoose.model('Job ', jobSchema);