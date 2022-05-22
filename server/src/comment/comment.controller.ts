import { Body, Controller, Post } from "@nestjs/common";
import { CommentService } from "./comment.service";
import { CreateCommentDto } from "./dto/create-comment.dto";

@Controller('/comment')
export class CommentController {
  constructor(
    private commentService: CommentService
  ) {}

  @Post()
  addComment(@Body() dto: CreateCommentDto) {
    return this.commentService.addComment(dto)
  }
}
