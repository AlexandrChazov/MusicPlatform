import { CommentController } from "./comment.controller";
import { Module } from "@nestjs/common";
import { CommentService } from "./comment.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { Comment } from './comment.model';
import { Track } from "../track/track.model";
import {TrackModule} from "../track/track.module";

@Module({
  controllers: [CommentController],
  providers: [CommentService],
  imports: [
    SequelizeModule.forFeature([Comment, Track]),
    TrackModule
  ]
})
export class CommentModule {}
