import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { FormEntity } from "./form.entity";

@Entity({ name: 'formData' })
export class FormDataEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    data: string;

    @ManyToOne(() => FormEntity, form => form.dataForm)
    formId: number;

}