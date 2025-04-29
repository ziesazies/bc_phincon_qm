import express from "express";
import cors from 'cors';
import sequelize from "./config/database";
import { error } from "console";
import router from "./routes";

const app = express();
const PORT = process.env.PORT ?? 3000;
app.use(cors());
app.use(express.json());

app.use("/api", router);
sequelize
  .sync()
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(error);
