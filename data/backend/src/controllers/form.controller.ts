import { Request, Response } from "express";
import { FormService } from "../services/form.service";


const formService: FormService = new FormService()

export class FormController {

    async createForm(req: Request, res: Response) {
        try {
            const form = await formService.createForm(req.body);
            return res.send(form)
        } catch (e) {
            console.log(e)
        }

    }


    async deleteForm(req: Request, res: Response) {
        try {
            const id = +req.params.id;
            return res.json(await formService.deleteForm(id))
        } catch (e) {
            console.log(e)
        }
    }


    async getFormByIdOrAllForms(req: Request, res: Response) {
        try {
            const id = +req.params.id;
            const forms = await formService.getFormByIdOrAllForm(id);
            return res.json(forms);
        } catch (error) {
            console.log(error)
        }
    }


    async createFormData(req: Request, res: Response) {
        try {
            const formData = await formService.createDataForm(req.body);
            return res.json(formData);

        } catch (e) {
            console.log(e)
        }
    }


}