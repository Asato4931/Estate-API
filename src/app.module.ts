import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GetEstateModule } from './get-estate/get-estate.module';

@Module({
  imports: [GetEstateModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
