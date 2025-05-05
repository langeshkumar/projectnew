import express from 'express';

const app = express();
const PORT = 6363;

// sample router 
app.get('/', (req, res) => {
    res.json({ msg: "This is get method..!" });
});

// crud process
// R - for read process 
app.get('', (req, res) => {
    // 
});

// C - for create process 
app.post('', (req, res) => {
    // 
});

// U - for update process 
app.put('', (req, res) => {
    // 
});
// D - for delete process 
app.delete('', (req, res) => {
    // 
});

app.listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}`);
});