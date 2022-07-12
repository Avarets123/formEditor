import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { FormDataEntity } from "./formdata.entity";

export enum FormType {
    Input = 'input',
    Textarea = 'textarea',
    Select = 'select'
}

@Entity({name: 'forms'})
export class FormEntity {

    @PrimaryGeneratedColumn()
    form_uid: number;

    @Column()
    name: string;


    @Column()
    description: string;

    @Column({type: 'enum', enum: FormType, default: FormType.Input })
    type: FormType;

    @CreateDateColumn()
    created: Date;

    @OneToMany(() => FormDataEntity, formData => formData.formId)
    dataForm: number[]

}

