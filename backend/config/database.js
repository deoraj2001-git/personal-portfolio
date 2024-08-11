import mongoose  from "mongoose";

export const connectDatabase = () => {
    mongoose.set("strictQuery", false);
    mongoose
        .connect(process.env.MONGO_URI)
        .then((c)=> {
            console.log(`Mongodb connected to : ${c.connection.host}`);

        })
        .catch((e)=> {
            console.log(e);
        });
};

// mongoose.connect(process.env.MONGO_URI).then((c)=>{
//     console.log("connnected to database");
    
// }).catch((e)=>{
//     console.log("error");
// })