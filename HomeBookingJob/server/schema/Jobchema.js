const { gql } = require('graphql-tag');

const typeDefs_User = gql`
  type Job {
    _id : ID 
        JobName : String
        JobType : String
        price : String
        people : Int
        time : Int 
        note : String 
        moreOption : Int
        userId : ID
        customerId : ID
        status : String
        address : String


    
    
    

  }
  type JobUserId {
    userId : String
    _id : ID
    token : String
    status : String
  }

  
  type Booking {
    Id : ID 
    JobName : Job
    JobType : Job
    price : String
    people : Int
    time : Int 
    note : String 
    moreOption : Int
    userId : profile
    customerId : profile
    status : String
    address : String

  }




  input JobInput {
     JobName : String
        JobType : String
        price : String
        people : Int
        time : Int
        note : String 
        moreOption : Int
        userId : String
        customerId : String
        status : String
        address : String

  }
  input JobUserGetInput {
    JobName : String!
   
  }

  input JobTypeInput {
    JobType :String
  }
  input JobBookingGetInput {
    _id : String!
  }
  input JobStatusChangeInput {
    status : String
    _id : String
    customerId : String
  }

  input newBookingInput{
    JobName : Jobinput!
    JobType : Jobinput!
    price : String
    people : Int
    time : String 
    note : String 
    moreOption : String
    userId : profileInput
    customerId : profileInput
    status : String
    address : String
}

input Jobinput {
  JobName : String
  JobType : String
}



  type Query {
    Jobs : [Job]
    getJobbyName (JobName : String , status : String) : [Job!]!
    getJobNameType (JobName : String) : [Job!]!
    getJobBookedbyName ( customerId : String , status : String) :  [Job!]!
    getYourJob (userId : String) : [Job!]!
    getLastestJob (status : String) :[Job!]!
    getYourJobBooked (userId : String , status : String) : [Job!]!
    getJobbyJobType (JobType : String, status : String): [Job!]!


  }

  type Mutation {
    jobRegistion (input : JobInput ) : Job
    JobUserGet (input : JobUserGetInput) : Job
    jobBookingGet (input : JobBookingGetInput ) : JobUserId
    jobStatusChange (input : JobStatusChangeInput) : Job
    jobCancel (input : JobStatusChangeInput ) : Job
    jobDelete (input  : JobBookingGetInput ) : Job

    newBooking (input : newBookingInput) : Booking
   
  }

`;

module.exports = typeDefs_User;
