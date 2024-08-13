import express from "express";

const app = express();
ç
app.set('port', 3000);

app.use(express.json);

export default app;
