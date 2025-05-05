import express from 'express';

const app = express();
const PORT = 6363;

app.get('/', (req, res) => {
    res.json({ msg: "This is get method..!" });
});

app.listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}`);
});