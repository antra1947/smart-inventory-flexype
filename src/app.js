


import express from "express";
import inventoryController from "./controllers/inventoryController.js";
import path from "path";
import { fileURLToPath } from "url";
import router from "./controllers/inventoryController.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

app.use(router);

app.use(express.static(path.join(__dirname, "../frontend")));
app.use("/", inventoryController);


app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
