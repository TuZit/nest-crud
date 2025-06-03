import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadGatewayException, ValidationPipe } from '@nestjs/common';
import { ValidationError } from 'class-validator';
import { LoggingMiddleware } from './middware/logging/logging.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      exceptionFactory: (validatorError: ValidationError[] = []) => {
        return new BadGatewayException(
          validatorError.map((err) => ({
            [err.property]: err.constraints ? Object.values(err.constraints) : []
          }))
        );
      }
    })
  );

  app.use((req, res, next) => new LoggingMiddleware().use(req, res, next));

  await app.listen(process.env.PORT ?? 3005);
}

bootstrap();
