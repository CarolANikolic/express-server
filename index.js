import express from "express";

const app = express();
const port = 3000;


app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>");
});

app.post("/register", (req, res) => {
    res.sendStatus(201);
});

app.put("/user/Carol", (req, res) => {
    res.sendStatus(200);
});

app.patch("/user/Carol", (req, res) => {
    res.sendStatus(200);
});

app.delete("/user/Carol", (req, res) => {
    res.sendStatus(200);
});


app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});