import { Router } from "express";
import { FormController } from "../controllers/form.controller";

const routes = Router();
const formController = new FormController();

routes.post('/form/create', formController.createForm);
routes.get('/form/delete/:id', formController.deleteForm);


export { routes };