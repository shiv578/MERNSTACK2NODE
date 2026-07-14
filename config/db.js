import {connect} from "mongoose";

const connectDb = async () =>{

    try{
     await  connect("mongodb://localhost:27017/students")// this connected to mongodb;
        console.log("Database is connected...")

    } catch ( error){
        console.log(error);
        process.exit(1);
    }
}

export default connectDb;
