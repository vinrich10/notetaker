import db from "./db/db.json";
import express, { urlencoded, json, static } from "express";
import htmlRoutes from "./routes/htmlRoutes";
import apiRoutes from "./routes/apiRoutes";
const app = express();
const PORT = process.env.PORT || 3000;
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(3000, function() {
    console.log("Server is running on port 3000");
    
    });
