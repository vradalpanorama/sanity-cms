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
        collapsible: true,
        collapsed: false,
      },
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
      options: {
        collapsible: true,
        collapsed: false,
      },
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
        // {
        //   name: 'action',
        //   type: 'reference',
        //   title: 'Action',
        //   validation: (Rule) => Rule.required(),
        //   to: [{type: 'modal'}, {type: 'news'}],
        // },
      ],
    },
  ],
}
