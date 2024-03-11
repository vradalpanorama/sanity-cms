export default {
  name: 'contentCover',
  title: 'Content Cover',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false,
  },
  validation: (Rule) => Rule.required(),
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'object',
      options: {
        collapsible: false,
        collapsed: false,
        columns: 2,
      },
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: 'en',
          title: 'EN',
          validation: (Rule) => Rule.required(),
          type: 'string',
        },
        {
          name: 'no',
          title: 'NO',
          validation: (Rule) => Rule.required(),
          type: 'string',
        },
      ],
    },
    {
      name: 'lead',
      title: 'Lead',
      type: 'object',
      options: {
        collapsible: false,
        collapsed: false,
        columns: 2,
      },
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: 'en',
          title: 'EN',
          validation: (Rule) => Rule.required(),
          type: 'string',
        },
        {
          name: 'no',
          title: 'NO',
          validation: (Rule) => Rule.required(),
          type: 'string',
        },
        {
          name: 'action',
          type: 'reference',
          title: 'Action',
          to: [{type: 'modal'}, {type: 'news'}, {type: 'page'}, {type: 'externalLink'}],
        },
      ],
    },
  ],
}
