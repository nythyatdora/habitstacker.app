import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { NotionService } from '@src/notion/notion.service';
import { HabitStackTemplateDto } from '@src/habit-stacker/habit-stack-dto';

@Controller('habitstacker')
export class HabitStackerController {
  constructor(private notionService: NotionService) {}

  @Get('/db/list')
  async dbList() {
    return await this.notionService.dbList();
  }

  @Post('/page/create')
  async createPage(@Body() { goals, stacks }: HabitStackTemplateDto) {
    return await this.notionService.createNotionTemplate(goals, stacks);
  }
}
