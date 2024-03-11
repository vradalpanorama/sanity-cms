export default {
    name: 'contentHeaderNews',
    title: 'content Header News',
    type: 'object',
    options: {
      collapsible: true,
      collapsed: false,
    },
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'object',
        validation: (Rule) => Rule.required(),
        options: {
          collapsible: false,
          columns: 2,
        },
        fields: [
          {
            name: 'en',
            title: 'EN',
            type: 'string',
          },
          {
            name: 'no',
            title: 'NO',
            type: 'string',
          },
        ],
      },
      {
        name: 'lead',
        title: 'Lead',
        type: 'object',
        validation: (Rule) => Rule.required(),
        fields: [
          {
            name: 'en',
            title: 'EN',
            rows: 3,
            type: 'text',
          },
          {
            name: 'no',
            title: 'NO',
            rows: 3,
            type: 'text',
          },
        ],
      },
    ],
  }
  