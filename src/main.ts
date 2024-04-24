import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';


const PORT=process.env.PORT || 3033;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  // app.useGlobalPipes(new ValidationPipe());
  await app.listen(PORT,()=>{
    console.log(`Server listening on ${PORT}`);
    
  });
}
bootstrap();


//group_stuff, group, branch