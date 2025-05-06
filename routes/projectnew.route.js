import express from 'express';

const projectnewRoute = express.Router();

// crud process
// R - for read process 
projectnewRoute.get('/', (req, res) => {
    res.json({ msg: "This is get projectnew" });
});

// C - for create process 
projectnewRoute.post('/', (req, res) => {
    res.json({ msg: "This is post projectnew" });
});

// U - for update process 
projectnewRoute.put('/:id', (req, res) => {
    res.json({ msg: "This is put projectnew" });
});
// D - for delete process 
projectnewRoute.delete('/:id', (req, res) => {
    res.json({ msg: "This is delete projectnew" });
});

export default projectnewRoute;