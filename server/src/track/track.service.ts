import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/sequelize";
import {Track} from "./track.model";
import {CreateTrackDto} from "./dto/create-track.dto";
import {FileService, FileType} from "../file/file.service";
import { Op } from "sequelize";

@Injectable()
export class TrackService {

  constructor(
    @InjectModel(Track) private trackRepository: typeof Track,
    private fileService: FileService
  ) {}

  async create(dto: CreateTrackDto, picture, audio): Promise<Track> {
    const audioPath = this.fileService.createFile(FileType.AUDIO, audio);
    const imagePath = this.fileService.createFile(FileType.IMAGE, picture);
    const track = await this.trackRepository.create({
      ...dto,
      audio: audioPath,
      picture: imagePath
    });
    return track;
  }

  async getAll(limit: number, offset: number): Promise<Track[]> {
    const tracks = await this.trackRepository.findAll({ limit, offset });
    return tracks;
  }

  async getOne(id: number): Promise<Track> {
    const track = await this.trackRepository.findOne({ where: { id }, include: { all: true } })
    if (!track) {
      throw new HttpException("Track not found", HttpStatus.NOT_FOUND)
    }
    return track
  }

  async delete(id: number): Promise<number> {
    const track = await this.trackRepository.findByPk(id)
    await this.trackRepository.destroy({ where: { id }})
    return track.id;
  }

  async listen(id: number): Promise<number> {
    const track = await this.trackRepository.findByPk(id)
    if (!track) {
      throw new HttpException('File not found', HttpStatus.NOT_FOUND)
    }
    ++track.listens;
    await track.save();
    return track.listens;
  }

  async search(query: string): Promise<Track[]> {
    const tracks = await this.trackRepository.findAll({
      where: {
        name: {
          [Op.iLike]: '%' + query + '%'
        }
      }
    });
    return tracks;
  }
}
