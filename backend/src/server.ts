import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import { todoRoutes } from "./routes/todoRoutes";

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());
app.use("/api/todo", todoRoutes);

// Conexão com o banco de dados MongoDB (mude a URL para a sua configuração)
mongoose
  .connect("")
  .then(() => {
    console.log("Conectado ao MongoDB");
    app.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`);
    });
  })
  .catch((err) => {
    console.error("Erro ao conectar ao MongoDB", err);
  });
