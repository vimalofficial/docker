import express from "express";

const app = express();
const PORT = process.env.PORT || 7000;

// API 1
app.get("/api1", (req, res) => {
  res.json({ success: true, message: "this is api 1" });
});

app.get("/api2", (req, res) => {
  res.json({ success: true, message: "this is api 2 v1" });
});

app.get("/api3", (req, res) => {
  res.json({ success: true, message: "this is api 3 v1" });
});

app.get("/vimal", (req, res) => {
  res.json({
    success: true,
    message: "hello world the devops trigger successfully worked",
  });
});

app.get("/event", (req, res) => {
  res.json({
    success: true,
    message: "vimal response changed",
  });
});



// ✅ Docker + Render safe
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
