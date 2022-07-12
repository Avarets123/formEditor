import { Repository } from "typeorm";
import { MyAppDataSource } from "../app";
import { FormEntity } from "../entities/form.entity";
import { ICreateForm } from "../interfaces/create.user.interface";


export class FormService {


    formRepository(): Repository<FormEntity> {
        return MyAppDataSource.getRepository(FormEntity)
    }

    async createForm(createForm: ICreateForm): Promise<FormEntity> {

        const newForm = new FormEntity();
        Object.assign(newForm, createForm); 

        return await this.formRepository().save(newForm);
    }


}