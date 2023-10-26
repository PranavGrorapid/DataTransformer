import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SchemaService } from './schema/schema.service';
import { SchemaController } from './schema/schema.controller';
import { SchemaModule } from './schema/schema.module';


@Module({
  imports: [SchemaModule],
  controllers: [AppController, SchemaController],
  providers: [AppService, SchemaService],
})
export class AppModule {}
