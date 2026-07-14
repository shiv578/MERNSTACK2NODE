const { connect } = require("mongoose");

const connectDb = async () => {
    try {
        await connect("mongodb://localhost:27017/students");
        console.log("Database is connected...");
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

module.exports = connectDb;
