import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/sequelize";
import {Track} from "./track.model";
import {CreateTrackDto} from "./dto/create-track.dto";

@Injectable()
export class TrackService {

  constructor(
    @InjectModel(Track) private trackRepository: typeof Track
  ) {}

  async create(dto: CreateTrackDto): Promise<Track> {
    const track = await this.trackRepository.create(dto);
    return track;
  }

  async getAll(): Promise<Track[]> {
    const tracks = await this.trackRepository.findAll();
    return tracks;
  }

  async getOne(id: number): Promise<Track> {
    const track = await this.trackRepository.findByPk(id);
    return track;
  }

  async delete(id: number): Promise<number> {
    const track = await this.trackRepository.findByPk(id)
    await this.trackRepository.destroy({ where: { id }})
    return track.id;
  }
}
