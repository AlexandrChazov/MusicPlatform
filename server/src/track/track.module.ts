import {Module} from "@nestjs/common";
import {TrackController} from "./track.controller";
import {TrackService} from "./track.service";
import {SequelizeModule} from "@nestjs/sequelize";
import {Track} from "./track.model";

@Module({
  controllers: [TrackController],
  providers: [TrackService],
  imports: [
    SequelizeModule.forFeature([Track])
  ]
})
export class TrackModule {}
