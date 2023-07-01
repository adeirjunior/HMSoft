import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Hotel Management System')
    .setDescription('The HMS API description')
    .setVersion('1.0')
    .addTag('user')
    .addTag('staff')
    .addTag('service')
    .addTag('room')
    .addTag('reservation')
    .addTag('payment')
    .addTag('maintenance')
    .addTag('invoice')
    .addTag('housekeeping')
    .addTag('hotel')
    .addTag('guest')
    .addTag('feedback')
    .addTag('event')
    .addTag('conference')
    .addTag('category')
    .addTag('booking')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/swagger', app, document);

  await app.listen(3001);
}
bootstrap();
