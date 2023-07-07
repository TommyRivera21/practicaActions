import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EncuestaModule } from './encuesta/encuesta.module';

@Module({
  imports: [EncuestaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
