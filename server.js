import express from "express";
import "dotenv/config.js"
import "./config/database.js"

const server = express(); // Crear Servidor

const PORT = process.env.PORT || 8080; // Puerto

const ready = () => console.log("Server ready on PORT "+PORT);

//middelware
server.use(express.json()) // permite trabajar con formato Json
server.use(express.urlencoded({ extended: false })) // 

server.listen(PORT,ready); 

//console.log(process.env.NODE_ENV)