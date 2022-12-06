const {conexion} = require("./basedatos/conexion");
const express = require("express")
const cors = require("cors")

//Inicializar app
console.log("App de node arrancada")

// Conectar a la base de datos
conexion();

// Crear servidor Node
const app = express();
const puerto = 3900;

// Configurar cors
app.use(cors());

// Convertir body a objeto js
app.use(express.json());  // recibir datos con content-type app/json
app.use(express.urlencoded({extended:true})) // form-urlencoded

// Rutas
const rutas_articulo = require("./rutas/articulo")

// Cargo las rutas
app.use("/api", rutas_articulo);

// Rutas prueba harcordeadas
app.get("/probando", (req, res) => {

    console.log("Se ha ejecutado en endpoint probando");

    return res.status(200).json([{
        curso: 'Master en React',
        autor: 'Victor'
    },
    {
        curso: 'Master en PHP',
        autor: 'Victor'
    }])
})

app.get("/", (req, res) => {

    
    return res.status(200).send("<h1>Empezando a crear api rest con node</h1>")
})

//Creat servidor y escuchar peticiones http
app.listen(puerto, () => {
    console.log("Servidor corriendo en el puerto "+ puerto);
})