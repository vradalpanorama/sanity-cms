export default {
  name: 'contentNewsFeed',
  title: 'Content News Feed',
  validation: (Rule) => Rule.required(),
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    {
      name: 'title',
      type: 'object',
      title: 'Title on News Feed',
      validation: (Rule) => Rule.required(),
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        {
          name: 'en',
          title: 'EN',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'no',
          title: 'NO',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'bottom',
      title: 'Bottom part',
      type: 'object',
      validation: (Rule) => Rule.required(),
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        {
          name: 'description',
          type: 'object',
          title: 'Description button',
          validation: (Rule) => Rule.required(),
          options: {
            collapsible: true,
            collapsed: false,
          },
          fields: [
            {
              name: 'en',
              title: 'EN',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'no',
              title: 'NO',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
        {
          name: 'button',
          type: 'object',
          title: 'Button name',
          description: 'Show all news -> /news',
          validation: (Rule) => Rule.required(),
          options: {
            collapsible: true,
            collapsed: false,
          },
          fields: [
            {
              name: 'en',
              title: 'EN',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'no',
              title: 'NO',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
}
