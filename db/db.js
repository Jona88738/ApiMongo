import mongoose from "mongoose";

export const conn = async () => {

    try {

        await mongoose.connect("mongodb://localhost:27017/");
        console.log("se realizo la conexion con exito");
        
    } catch (error) {
        console.log(error)
    }
  
}