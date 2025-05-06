import express from 'express';
import projectnewRoute from './routes/projectnew.route.js'

const app = express();
const PORT = 6363;

// sample router 
app.get('/', (req, res) => {
    res.json({ msg: "This is get method..!" });
});

// use route middleware
app.use('/project', projectnewRoute);

app.listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}`);
});