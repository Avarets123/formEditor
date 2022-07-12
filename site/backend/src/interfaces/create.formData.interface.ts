export interface ICreateFormData {
  formId: number;
  data: string;
}

export type IResCreateFormData = ICreateFormData & { id: number };
