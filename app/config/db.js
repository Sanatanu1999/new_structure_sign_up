const mongoose=require('mongoose')

const dbConnection=async()=>{
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("the database connection is successful");
    }
    catch(err){
        console.log("Failed to Connect with the Database:",err);
    }
}

module.exports = dbConnection;