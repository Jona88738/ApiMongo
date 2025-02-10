import mongoose from "mongoose";

const userModel = new  mongoose.Schema({
    "Nombre":{type:String, required:true}, 
    "Edad":{type:Number, required: true},
    "Correo":{type:String, required: true}

});

export default  mongoose.model("usuarios",userModel);