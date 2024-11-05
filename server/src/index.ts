import express, { Request, Response } from "express";
import cors from "cors";
import fs from "fs";
import path from "path";

const app = express();
const PORT = 3000;

// Enable CORS for your frontend URL
app.use(
  cors({
    origin: "http://localhost:3001",
  })
);

app.get("/data", (req: Request, res: Response) => {
  const filePath = path.join(__dirname, "../data.json");
  const { type } = req.query;

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      res.status(500).send("Error reading data file.");
      return;
    }

    try {
      let jsonData = JSON.parse(data);

      // Filter data if type query parameter is provided and matches known types
      const validTypes = ["Project", "Saved", "Shared", "Achievement"];
      if (type && validTypes.includes(type as string)) {
        jsonData = jsonData.filter(
          (item: { type: string }) => item.type === type
        );
      }

      res.json(jsonData);
    } catch (parseErr) {
      res.status(500).send("Error parsing JSON data.");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
