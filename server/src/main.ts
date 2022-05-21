import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function start() {
  try {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);
    await app.listen(PORT, () => console.log(`server has started on port ${PORT}`)  );
  } catch(err) {
    console.log(err)
  }
}

start();
