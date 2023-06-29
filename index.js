import express from "express";
import path from 'path';


const app = express();

const port = process.env.PORT || 8000;


app.use(express.static('public'))

app.get("/web/index.php/auth/birthCertificate/view/cert/B/WyUVEEEkjhHjhHFJko%3D%3D",async (req,res) => {
    const file = path.join(path.resolve(path.dirname('')),'public','index.html');
    res.sendFile(file);
})

app.listen(port, () => {`Server is listening`})