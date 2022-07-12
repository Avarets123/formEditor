import { Injectable } from '@nestjs/common';
import * as axios from 'axios';

@Injectable()
export class AppService {
  async getFormsOrOneFormById(id?: number) {
    if (id) {
      const res = await (await axios.default.get('http://localhost:3003/api/form/get/' + id)).data;
      return res;
    }

    const res = await (await axios.default.get('http://localhost:3003/api/form/getAll')).data;
    return res;
  }
}
