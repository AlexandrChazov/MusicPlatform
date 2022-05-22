import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from "@nestjs/config";
import { Track } from "./track/track.model";
import { Comment } from "./comment/comment.model";
import { TrackModule } from "./track/track.module";
import { CommentModule } from "./comment/comment.module";

@Module({
  imports: [
    TrackModule,
    CommentModule,
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
        Track,
        Comment
      ],
      autoLoadModels: true // чтобы Sequelize автоматически создавал таблицы в БД на основании моделей, которые мы передали выше
    }),
  ]
})
export class AppModule {}
