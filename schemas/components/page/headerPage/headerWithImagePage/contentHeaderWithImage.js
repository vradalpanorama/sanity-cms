export default {
  name: 'contentHeaderWithImage',
  title: 'content Header',
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
    {
      name: 'thirdField',
      title: 'Third field',
      type: 'object',
      options: {
        collapsible: false,
        columns: 2,
      },
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: 'icon',
          type: 'iconPicker',
          title: 'Search and select icon',
          options: {
            storeSvg: true,
          },
        },
        {
          name: 'text',
          title: 'Text on the third field',
          type: 'object',
          validation: (Rule) => Rule.required(),
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
      ],
    },
  ],
}
