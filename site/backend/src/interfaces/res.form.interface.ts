enum FormType {
  Input = 'input',
  Textarea = 'textarea',
  Select = 'select',
}

export interface IResForm {
  form_uid: number;
  name: string;
  description: string;
  type: FormType;
  created: Date;
}
