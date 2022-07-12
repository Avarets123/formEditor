import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum FormType {
    Input = 'input',
    Textarea = 'textarea',
    Select = 'select'
}

@Entity({name: 'forms'})
export class FormEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;


    @Column()
    description: string;

    @Column({type: 'enum', enum: FormType, default: FormType.Input })
    type: FormType;

    @CreateDateColumn()
    created: Date;

}

