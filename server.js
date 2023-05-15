import express from "express";
import "dotenv/config.js"

const server = express(); // Crear Servidor

const PORT = process.env.PORT || 8080; // Puerto

const ready = () => console.log("Server ready on PORT "+PORT);

server.listen(PORT,ready); 

console.log(process.env.NODE_ENV)