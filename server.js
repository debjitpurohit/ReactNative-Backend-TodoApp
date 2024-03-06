import {app} from "./app.js"
import { config } from "dotenv"
import { connectDB } from "./config/db.js"
import {v2 as cloudinary} from 'cloudinary';
config({
    path:"./config/config.env"
})
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
  });


connectDB();
app.listen(process.env.PORT , ()=>{
    console.log("server running on port "+ process.env.PORT)
})
