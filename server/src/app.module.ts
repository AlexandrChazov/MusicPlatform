import { Module } from '@nestjs/common';
import { TrackModule } from "./track/track.module";
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from "@nestjs/config";
import {Track} from "./track/track.model";

@Module({
  imports: [
    TrackModule,
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [
        Track
      ],
      autoLoadModels: true // чтобы Sequelize автоматически создавал таблицы в БД на основании моделей, которые мы передали выше
    }),
  ]
})
export class AppModule {}
