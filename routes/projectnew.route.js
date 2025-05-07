import express from 'express';
import { projectdelete, projectget, projectpost, projectput } from '../controller/projectnew.controller.js';

const projectnewRoute = express.Router();

// crud process
// R - for read process 
projectnewRoute.get('/', projectget);

// C - for create process 
projectnewRoute.post('/', projectpost);

// U - for update process 
projectnewRoute.put('/:id', projectput);
// D - for delete process 
projectnewRoute.delete('/:id', projectdelete);

export default projectnewRoute;