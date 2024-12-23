import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/index.html");
});

app.get("/student-quiz-type.html", (req, res)=>{
    res.sendFile(__dirname+"/student-quiz-type.html");
});

var type = "public";

app.post("/student-quiz-type", (req, res)=>{
    type = req.body["quiz-type"];
    if(type==="private"){
        res.sendFile(__dirname+"/student-private.html");
    }else{
        res.sendFile(__dirname+ "/student-public.html");
    }
});

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});

