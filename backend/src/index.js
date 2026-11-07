import express from "express";
import cors from "cors";
import "dotenv/config";
import investigateRoute from "./routes/investigate.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/investigate", investigateRoute);

app.get("/health", (req, res) => {
  res.json({ status: "ok", message: "repoRescue is runninggggg!!!!." });
});

app.listen(PORT, () => {
  console.log(
    `🚀 repoRescue Backend Engine started on http://localhost:${PORT}`,
  );
});
