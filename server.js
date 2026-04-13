import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());

app.get("/player/:tag", async (req, res) => {
  try {
    const tag = encodeURIComponent(`#${req.params.tag}`);

    const response = await fetch(
      `https://api.brawlstars.com/v1/players/${tag}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      return res.status(response.status).json({ error: "Player not found" });
    }

    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});