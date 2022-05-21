import { Module } from '@nestjs/common';
import { TrackModule } from "./track/track.module";
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    TrackModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'MusicPlatform',
      models: [],
      autoLoadModels: true // чтобы Sequelize автоматически создавал таблицы в БД на основании моделей, которые мы передали выше
    }),
  ]
})
export class AppModule {}
