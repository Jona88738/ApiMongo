import { Router } from "express";
import UsuarioModel from "../Modelos/UsuarioModel.js";

const router = Router();

router.get("/find", async (req,res) => {

    const {edad} = req.query;
    
    const datosUser = await UsuarioModel.find({"Edad":{$gte:edad}});
    
    if(datosUser.length === 0) return res.status(404).json({"Message":"Recurso no encontrado."});

    
    return res.json(datosUser);
  
})

router.put("/put",  (req,res) => {

    const userDatos = req.body;
    console.log(userDatos);
    try {

        
        const insertarDato = new UsuarioModel(userDatos)
        insertarDato.save();
        
        console.log(insertarDato);
        
    } catch (error) {
        console.log(error);   
    }
   

    res.json(insertarDato)
})

router.patch("/update", async (req,res) =>{

    let updateUser;
 try {
    updateUser = await UsuarioModel.updateOne({"Nombre":"Jona"},{$set:{"Nombre":"Nataly"}});
    console.log("Se actualizo con exito");
    
 } catch (error) {
    console.log(error);
 }

    res.json(updateUser)
})




export default router;