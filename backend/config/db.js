import mongoose from 'mongoose'

const connectDB= async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {
          useUnifiedTopology: true,
          useNewUrlParser: true,
          //   useCreateIndex: true,
        });
        console.log(`Mongodb connected: ${conn.connection.host}`.cyan.underline)
    } catch(error){
        console.log(`Error: ${error.message}`)
        process.exit(1)
    }

}
export default connectDB;