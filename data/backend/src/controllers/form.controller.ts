import { Request, Response } from "express";
import { JSONRPCServer } from "json-rpc-2.0";
import { FormService } from "../services/form.service";


const formService: FormService = new FormService()
const jServer = new JSONRPCServer();

export class FormController {

    async createForm(req: Request, res: Response) {

        try {

            jServer.addMethod('create', data => data);

            const data = await (await jServer.receive(req.body)).result;
            console.log(data)

            const form = await formService.createForm(data);
            return res.send(form)

        } catch (e) {
            console.log(e)
        }

    }

}