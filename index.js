import express from "express";
import path from 'path';


const app = express();

const port = process.env.PORT || 8000;


app.use(express.static('public'))

app.get("/web/index.php/auth/deathCertificate/view/cert/D/OWtNUTJQZDfjheD5jklHGntdbvjbhsgbmghb6URbhj%3D",async (req,res) => {
    const file = path.join(path.resolve(path.dirname('')),'public','index.html');
    res.sendFile(file);
})

app.listen(port, () => {`Server is listening`})
