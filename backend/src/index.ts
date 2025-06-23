import express, { Request, Response } from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/v1/user", userRoutes);
// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});