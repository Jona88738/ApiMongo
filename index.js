import express from "express";
import {conn} from "./db/db.js"
import router from "./Rutas/RutasUsuario.js";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())


conn();



app.get("/", (req,res) => {
    
 res.send("Hello world")
});

app.use(router);

app.listen(3000);




