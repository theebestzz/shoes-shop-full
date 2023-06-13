import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/MongoDb.js";
import ImportData from "./DataImport.js";
import productRoute from "./routes/ProductRoutes.js";
import { errorHandler } from "./middleware/errors.js";

dotenv.config();
connectDB();
const app = express();

app.use("/api/import", ImportData);
app.use("/api/products", productRoute);

app.use(errorHandler);

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
