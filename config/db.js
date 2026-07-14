import {connect} from "mongoose";

const connectDb = async () =>{

    try{
     await  connect("mongodb://localhost:27017/students")// this connected to mongodb;
     //awaits until the connection is edtablished.
        console.log("Database is connected...")

    } catch ( error){
        console.log(error);
        process.exit(1);// stops the applications if the connections fails.
    }
}

export default connectDb;
