import mongoose from "mongoose";

async function connectDataBase(){
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Conectado correctamente")
    } catch (error) {
        console.log(error)
    }
}
connectDataBase();
/*
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log ('database conectada'))
.catch(error => console.log(error))
*/
