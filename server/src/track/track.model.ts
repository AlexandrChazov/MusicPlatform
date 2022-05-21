import {Column, DataType, Model, Table} from "sequelize-typescript";

interface TrackCreationAttrs {
  name: string
  artist: string
  text: string
  listens: number
  picture: string
  audio: string
}

@Table({ tableName: 'track' })
export class Track extends Model<Track, TrackCreationAttrs> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number

  @Column({ type: DataType.STRING, allowNull: false })
  name: string

  @Column({ type: DataType.STRING, allowNull: false })
  artist: string

  @Column({ type: DataType.STRING })
  text: string

  @Column({ type: DataType.INTEGER, defaultValue: 0, allowNull: false })
  listens: number

  @Column({ type: DataType.STRING })
  picture: string

  @Column({ type: DataType.STRING })
  audio: string
}
