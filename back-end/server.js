import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors"; // Use import for CORS

import orderRoutes from "./routes/orderRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import emailRoutes from "./routes/emailRoutes.js"; // Import email route
import forgetPasswordRoutes from "./routes/forgetPasswordRoutes.js"; // Import forget password route

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";


dotenv.config(); // Load environment variables

const port = process.env.PORT || 5000;

connectDB();

const app = express(); // Initialize app

//Used for production/deployment
const allowedOrigins = ["https://chorley-chilli.onrender.com"];
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true, // Include if you're using cookies or authorization headers
  })
); 

//app.use(cors()); // Enable CORS in development - uses local host

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/send", emailRoutes); // Register email route
app.use("/api/forget-password", forgetPasswordRoutes); // Register forget password route
app.get("/api/config/paypal", (req, res) =>
  res.send({ clientId: process.env.PAYPAL_CLIENT_ID })
);

if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use("/uploads", express.static("/var/data/uploads"));
  app.use(express.static(path.join(__dirname, "/front-end/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "front-end", "build", "index.html"))
  );
} else {
  const __dirname = path.resolve();
  app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

app.use(notFound);
app.use(errorHandler);

app.listen(port, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
);
