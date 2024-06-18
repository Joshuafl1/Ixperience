const express = require("express");
const cors = require("cors");

const blogsRoutes = require("./routes/blogs");
require("dotenv").config();

const categoryRoutes = require("./routes/categories");
const authRoutes = require("./routes/auth");

const connectDB = require("./database/db");

connectDB();

const port = process.env.PORT || 8000;

const app = express();

// Enabling CORS for any unknown origin
app.use(cors());

// Enabling the use of JSON for the body of the request
app.use(express.json());

app.use("/api/blogs", blogsRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
