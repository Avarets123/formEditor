import { FormType } from "../entities/form.entity";

export interface ICreateForm {

    name: string;
    description: string;
    type: FormType;

}