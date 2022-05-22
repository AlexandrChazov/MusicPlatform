import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Comment } from "./comment.model";
import { TrackService } from "../track/track.service";

@Injectable()
export class CommentService {

  constructor(
    @InjectModel(Comment) private commentRepository: typeof Comment,
    private trackService: TrackService,
  ) {}

  async addComment(dto: CreateCommentDto): Promise<Comment> {
    const track = await this.trackService.getOne(dto.trackId)
    if (!track) {
      throw new HttpException("Track not found", HttpStatus.NOT_FOUND)
    }
    const comment = await this.commentRepository.create(dto)
    return comment;
  }

  async findComments(id: number): Promise<Comment[]> {
    const comments = await this.commentRepository.findAll({ where: { trackId: id } });
    return comments;
  }
}
