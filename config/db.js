import mongoose from "mongoose"
 const FileuploadDatabase=async ()=>{
    try{
        await mongoose.connect(process.env.MONGOSE_DATABASE,{useNewUrlParser:true})
        console.log("Database connected successfully")

    }catch(error){
        console.log("Error in database connection",error)
    }
}

export default FileuploadDatabase