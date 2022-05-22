import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Track } from "../track/track.model";

interface CommentCreationAttrs {
  trackId: number;
  username: string;
  text: string;
}

@Table({ tableName: 'comments' })
export class Comment extends Model<Comment, CommentCreationAttrs> {

  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number

  @Column({ type: DataType.STRING })
  username: string

  @Column({ type: DataType.STRING, allowNull: false })
  text: string

  @ForeignKey(() => Track)
  @Column({ type: DataType.INTEGER })
  trackId: number

  @BelongsTo(() => Track)
  track: Track
}
