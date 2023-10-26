import express from "express";
import config from "./config.js";
import RouterAlumnos from "./router/routerNumeros.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

app.use("/numeros", new RouterAlumnos().start());

const PORT = config.PORT;
const server = app.listen(PORT, () =>
  console.log(`Servidor escuchando en http://127.0.0.1:${PORT}`)
);
server.on("error", (error) =>
  console.log(`Error en servidor: ${error.message}`)
);
