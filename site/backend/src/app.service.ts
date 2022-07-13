import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ICreateFormData, IResCreateFormData } from './interfaces/create.formData.interface';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}
  async getFormsOrOneFormById(id?: number) {
    if (id) {
      const res = await (await this.httpService.get('http://data_backend:3003/api/form/get/' + id).toPromise()).data;
      return res;
    }

    const res = await (await this.httpService.get('http://data_backend:3003/api/form/getAll' + id).toPromise()).data;

    return res;
  }

  async createDataForm(createFormData: ICreateFormData): Promise<IResCreateFormData> {
    const res = await (await this.httpService.post('http://data_backend:3003/api/form/filling', createFormData).toPromise()).data;
    return res;
  }
}
