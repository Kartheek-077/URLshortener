import express from "express";
import URL from "./Model/url.js"
import connectMongoDB from "./connection.js";
import homeRouter from "./Routes/homerouter.js";
import userRouter from "./Routes/userrouter.js";

const app = express();
const port = 3000;

connectMongoDB("mongodb://127.0.0.1:27017/shortURL")
    .then(()=>{
        console.log("Mongo Started");
        app.listen(port,()=>console.log(`Server started on ${port}`));
    })
    .catch((err) => console.log("Error occured : ",err));

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use("/",homeRouter);
app.use("/user",userRouter);




