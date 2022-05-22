import {Body, Controller, Delete, Get, Param, Post} from "@nestjs/common";
import {TrackService} from "./track.service";
import {CreateTrackDto} from "./dto/create-track.dto";

@Controller('/tracks')
export class TrackController {

  constructor(private trackService: TrackService) {}

  @Post()
  create(@Body() dto: CreateTrackDto) {
    return this.trackService.create(dto);
  }

  @Get()
  getAll() {
    return this.trackService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.trackService.getOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.trackService.delete(id);
  }

}
