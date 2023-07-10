console.log("Password Reset");
import express from "express"
import dotenv from "dotenv";
import cors from "cors";
import { userRouter } from "./Routes/users.js";

dotenv.config();
const PORT = process.env.PORT;
const app = express(); 

// db connection:
// dbConnection();

//application middleware 
app.use(express.json());
app.use(cors());

//user is the base route 
app.use("/user", userRouter);

app.get("/", (req,res)=> {
   res.send({msg:"connection working - password reset"});
})

app.listen(PORT,()=>console.log(`Server started at localhost:${PORT}`))