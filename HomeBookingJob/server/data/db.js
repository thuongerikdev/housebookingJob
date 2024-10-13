

const Job = require('../models/JobData')

const {Account , Avatar} = require('../models/AccountRegister')

const { Icon, Work } = require ('../models/image')



const mongoDataMethod  = {
    getUserName : async id => await  Account.findById(id),

    getAllUser : async (condition = null)=> condition === null ? await Account.find() : await Account.find(condition),

    getJobbyName : async JobName => await Job.find({ JobName : JobName ,status : "available"}),

    getJobBookedbyName : async customerId => await Job.find({ customerId : customerId ,status : "unavailable"}),

    getYourJobBooked : async userId => await Job.find ({userId : userId , status: "unavailable"}),

    getYourJob : async userId => await Job.find({ userId : userId }),

    getAvailableJob : async status => await Job.find ({status : status}),

    getJobNameType : async JobType => await Job.find ({JobType : JobType}),

    getAllJob : async (condition = null)=> condition === null ? await Job.find() : await Job.find(condition),

    getJobbyID : async id => await JobData.findById(id),

    getJobbyJobType : async JobType => await Job.find({JobType : JobType, status : "available"}),

    getIconByname : async name => await Icon.findOne({name : name}),

    getIconInMainScreen : async showIn => await Icon.find ({showIn : showIn}),

    
}


module.exports = mongoDataMethod