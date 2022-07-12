import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import * as axios from 'axios';
import { ICreateFormData, IResCreateFormData } from './interfaces/create.formData.interface';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}
  async getFormsOrOneFormById(id?: number) {
    if (id) {
      const res = await (await this.httpService.get('http://localhost:3003/api/form/get/' + id).toPromise()).data;
      // const res = await (await axios.default.get('http://localhost:3003/api/form/get/' + id)).data;
      return res;
    }

    const res = await (await this.httpService.get('http://localhost:3003/api/form/getAll' + id).toPromise()).data;

    // const res = await (await axios.default.get('http://localhost:3003/api/form/getAll')).data;
    return res;
  }

  async createDataForm(createFormData: ICreateFormData): Promise<IResCreateFormData> {
    const res = await (await this.httpService.post('http://localhost:3003/api/form/filling', createFormData).toPromise()).data;
    return res;
  }
}
