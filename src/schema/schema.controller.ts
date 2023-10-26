

import { Controller, Post, Body } from '@nestjs/common';
import { SchemaService } from './schema.service';

@Controller('schema')
export class SchemaController {
  constructor(private readonly schemaService: SchemaService) {}

   
    
  @Post('transform')
  transformDataToSchema(@Body() inputData: Record<string, any>) {

 
    console.log('controller called ....',inputData);

    const schema = this.schemaService.transformInputToSchema(inputData);
    return schema;
  }
}
