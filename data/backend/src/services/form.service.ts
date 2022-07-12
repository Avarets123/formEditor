import { FormDataEntity } from "../entities/formdata.entity";
import { ICreateFormData } from "../interfaces/create.formData.interface";
import { DeleteResult, Repository } from "typeorm";
import { MyAppDataSource } from "../app";
import { FormEntity } from "../entities/form.entity";
import { ICreateForm } from "../interfaces/create.form.interface";


export class FormService {


    private formRepository(): Repository<FormEntity> {
        return MyAppDataSource.getRepository(FormEntity);
    }

    private formDataRepository(): Repository<FormDataEntity> {
        return MyAppDataSource.getRepository(FormDataEntity);
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
            return await this.formRepository().findOne({
                where: { form_uid: id },
                relations: {dataForm: true}
            });
        }
        return await this.formRepository().find();
    }

    async createDataForm(createDataForm: ICreateFormData): Promise<FormDataEntity> {
        const newDataForm = new FormDataEntity();
        Object.assign(newDataForm, createDataForm);
        return await this.formDataRepository().save(newDataForm);
    }

}