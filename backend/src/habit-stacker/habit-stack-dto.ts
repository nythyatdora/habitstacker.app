export class HabitStackTemplateDto {
  goals: Array<string>;
  stacks: Array<{
    top?: number;
    currentHabit?: string;
    nextHabit?: string;
    time?: string;
    location?: string;
  }>;
}
