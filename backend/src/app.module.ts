import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HabitStackerController } from './habit-stacker/habit-stacker.controller';
import { NotionService } from './notion/notion.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [HabitStackerController],
  providers: [NotionService],
})
export class AppModule {}
