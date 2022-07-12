import { Router } from "express";
import { FormController } from "../controllers/form.controller";

const routes = Router();
const formController = new FormController();

routes.post('/api/form/create', formController.createForm)


export { routes };