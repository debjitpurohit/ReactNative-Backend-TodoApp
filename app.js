import express from "express"
import  User from "./routes/user.js"
import cookieParser from "cookie-parser"
import fileUpload from "express-fileupload"
import cors from "cors"
export const app = express()

//jehetu amra json file use krchi so 
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())
//for uploading files
app.use(fileUpload({
    limits: {fileSize: 50 * 1024 * 1024},
    ///useTempFiles for creating temp folder 
    useTempFiles:true
}
))
app.use(cors());

app.use("/api/v1" , User);
