import { Router } from "express";
import { FormController } from "../controllers/form.controller";

const routes = Router();
const formController = new FormController();

routes.post('/create', formController.createForm);
routes.get('/delete/:id', formController.deleteForm);
routes.get('/getAll', formController.getFormByIdOrAllForms);
routes.get('/get/:id', formController.getFormByIdOrAllForms);
routes.post('/filling', formController.createFormData);

export { routes };