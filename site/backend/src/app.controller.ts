import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ICreateFormData, IResCreateFormData } from './interfaces/create.formData.interface';
import { IResForm } from './interfaces/res.form.interface';

@Controller('form')
export class AppController {
  constructor(private appService: AppService) {}

  @Get('get/all')
  async getForms(): Promise<IResForm[]> {
    return this.appService.getFormsOrOneFormById();
  }

  @Get('get/:id')
  async getOneFormById(@Param('id') id: number): Promise<IResForm> {
    return await this.appService.getFormsOrOneFormById(id);
  }

  @Post('filling')
  async addFormData(@Body() createDataForm: ICreateFormData): Promise<IResCreateFormData> {
    return await this.appService.createDataForm(createDataForm);
  }
}
