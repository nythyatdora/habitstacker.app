import { Injectable } from '@nestjs/common';
import { Client } from '@notionhq/client';
import { v4 as uuidv4 } from 'uuid';

const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const colors = [
  'default',
  'gray',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple',
  'pink',
];

@Injectable()
export class NotionService {
  notion: Client;
  databaseID: string;
  constructor() {
    this.notion = new Client({
      auth: process.env.NOTION_TOKEN,
    });
    this.databaseID = process.env.NOTION_DATABASE_ID;
  }

  async dbList() {
    return await this.notion.databases.list();
  }

  async createNotionTemplate(
    goals: Array<string> = [],
    stacks: Array<{
      top?: number;
      currentHabit?: string;
      nextHabit?: string;
      time?: string;
      location?: string;
    }> = [],
  ) {
    const generateStacks = (stacks = []) => {
      if (stacks.length === 0) {
        return [
          {
            object: 'block',
            type: 'paragraph',
            paragraph: {
              text: [
                {
                  type: 'text',
                  text: {
                    content: '(empty stacks)',
                  },
                  annotations: {
                    italic: true,
                    color: 'gray',
                  },
                },
              ],
            },
          },
        ];
      }
      return stacks.map((stack, index) => {
        if (index === 0) {
          return {
            object: 'block',
            type: 'to_do',
            to_do: {
              text: [
                {
                  type: 'text',
                  text: {
                    content: 'I will ',
                  },
                },
                {
                  type: 'text',
                  text: {
                    content: stack.currentHabit,
                  },
                  annotations: {
                    bold: true,
                    code: true,
                    color: 'yellow',
                  },
                },
                {
                  type: 'text',
                  text: {
                    content: ' at ',
                  },
                },
                {
                  type: 'text',
                  text: {
                    content: stack.time,
                  },
                  annotations: {
                    bold: true,
                    code: true,
                    color: 'red',
                  },
                },
                {
                  type: 'text',
                  text: {
                    content: ' in ',
                  },
                },
                {
                  type: 'text',
                  text: {
                    content: stack.location,
                  },
                  annotations: {
                    bold: true,
                    code: true,
                    color: 'orange',
                  },
                },
                {
                  type: 'text',
                  text: {
                    content: ' .',
                  },
                },
              ],
            },
          };
        }
        return {
          object: 'block',
          type: 'to_do',
          to_do: {
            text: [
              {
                type: 'text',
                text: {
                  content: 'After ',
                },
              },
              {
                type: 'text',
                text: {
                  content: stack.currentHabit,
                },
                annotations: {
                  bold: true,
                  code: true,
                  color: 'yellow',
                },
              },
              {
                type: 'text',
                text: {
                  content: ' I will ',
                },
              },
              {
                type: 'text',
                text: {
                  content: stack.nextHabit,
                },
                annotations: {
                  bold: true,
                  code: true,
                  color: 'yellow',
                },
              },
              {
                type: 'text',
                text: {
                  content: ' at ',
                },
              },
              {
                type: 'text',
                text: {
                  content: stack.time,
                },
                annotations: {
                  bold: true,
                  code: true,
                  color: 'red',
                },
              },
              {
                type: 'text',
                text: {
                  content: ' in ',
                },
              },
              {
                type: 'text',
                text: {
                  content: stack.location,
                },
                annotations: {
                  bold: true,
                  code: true,
                  color: 'orange',
                },
              },
              {
                type: 'text',
                text: {
                  content: ' .',
                },
              },
            ],
          },
        };
      });
    };

    const response: any = await this.notion.request({
      path: 'pages',
      method: 'post',
      body: {
        parent: { database_id: this.databaseID },
        properties: {
          Title: {
            title: [
              {
                type: 'text',
                text: {
                  content: 'Habit Stacker ✌️🥳✌️',
                },
              },
            ],
          },
          // goals that display in the template
          Goals: {
            id: uuidv4(),
            multi_select: goals.map((goal) => ({
              name: goal,
              color: colors[random(0, colors.length - 1)],
            })),
          },
        },
        children: [
          {
            object: 'block',
            type: 'heading_3',
            heading_3: {
              text: [
                {
                  type: 'text',
                  text: {
                    content: 'A Quote from ',
                  },
                },
                {
                  type: 'text',
                  text: {
                    content: 'Atomic Habits',
                  },
                  annotations: {
                    underline: true,
                    italic: true,
                    color: 'yellow',
                  },
                },
              ],
            },
          },
          {
            object: 'block',
            type: 'bulleted_list_item',
            bulleted_list_item: {
              text: [
                {
                  type: 'text',
                  text: {
                    content: '“',
                  },
                  annotations: {
                    bold: true,
                  },
                },
                {
                  type: 'text',
                  text: {
                    content:
                      'Every action you take is a vote for the type of person you wish to become.',
                  },
                },
                {
                  type: 'text',
                  text: {
                    content: '” ― James Clear',
                  },
                  annotations: {
                    bold: true,
                  },
                },
              ],
            },
          },
          {
            object: 'block',
            type: 'paragraph',
            paragraph: {
              text: [
                {
                  type: 'text',
                  text: {
                    content: '(intentional line break)',
                  },
                  annotations: {
                    italic: true,
                    color: 'gray',
                  },
                },
              ],
            },
          },
          {
            object: 'block',
            type: 'heading_3',
            heading_3: {
              text: [
                {
                  type: 'text',
                  text: {
                    content: 'Your Habit Stacks 🍪',
                  },
                },
              ],
            },
          },
          // stacks that display in the template
          ...generateStacks(stacks),
          // end stacks
          {
            object: 'block',
            type: 'paragraph',
            paragraph: {
              text: [
                {
                  type: 'text',
                  text: {
                    content: '(intentional line break)',
                  },
                  annotations: {
                    italic: true,
                    color: 'gray',
                  },
                },
              ],
            },
          },
          {
            object: 'block',
            type: 'paragraph',
            paragraph: {
              text: [
                {
                  type: 'text',
                  text: {
                    content: 'Reference:\n',
                  },
                  annotations: {
                    bold: true,
                  },
                },
                {
                  type: 'text',
                  text: {
                    content: '- ',
                  },
                },
                {
                  type: 'text',
                  text: {
                    content: 'Atomic Habits',
                    link: {
                      url: 'https://jamesclear.com/atomic-habits',
                    },
                  },
                  annotations: {
                    italic: true,
                    color: 'yellow',
                  },
                },
                {
                  type: 'text',
                  text: {
                    content: ' Chapter 1: Make it Obvious at p57.',
                  },
                  annotations: {
                    italic: true,
                  },
                },
              ],
            },
          },
        ],
      },
    });

    return {
      url: response.url || 'something is wrong!',
    };
  }
}
