import mongoose from "mongoose";

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || '');
    }
    catch(err){
        throw new Error("Connection Failed")
    }
}

export default connect