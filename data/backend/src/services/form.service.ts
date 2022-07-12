import { DeleteResult, Repository } from "typeorm";
import { MyAppDataSource } from "../app";
import { FormEntity } from "../entities/form.entity";
import { ICreateForm } from "../interfaces/create.user.interface";


export class FormService {


    private formRepository(): Repository<FormEntity> {
        return MyAppDataSource.getRepository(FormEntity)
    }

    async createForm(createForm: ICreateForm): Promise<FormEntity> {

        const newForm = new FormEntity();
        Object.assign(newForm, createForm); 

        return await this.formRepository().save(newForm);
    }


    async deleteForm(id: number): Promise<DeleteResult> {
        return await this.formRepository().delete({form_uid: id})
    }

    async getFormByIdOrAllForm(id?: number): Promise<FormEntity | FormEntity[]> {

        if (id) {
            return await this.formRepository().findOneBy({ form_uid: id });
        }

        return await this.formRepository().find();

    }


}