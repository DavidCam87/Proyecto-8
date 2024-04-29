require("dotenv").config();
const express = require("express");
const { connectDB } = require("./src/config/db");
const { connectCloudinary } = require("./src/config/cloudinary");
const marcaRoutes = require("./src/api/routes/marca");
const movilRoutes = require("./src/api/routes/movil");
const userRoutes = require("./src/api/routes/user");

const app = express();
app.use(express.json());
connectDB();
connectCloudinary();
const PORT = 3000;

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/marcas", marcaRoutes);
app.use("/api/v1/moviles", movilRoutes);

app.use("*", (req, res, next) => {
  return res.status(404).json("Rute not foud 😢😢😭")
});
app.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost:${PORT} 👌🏼🆗😉`);
}); 