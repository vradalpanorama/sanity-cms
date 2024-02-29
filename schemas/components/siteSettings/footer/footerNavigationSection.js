export default {
  name: 'footerNavigationSection',
  title: 'Footer Navigation Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title Section',
      type: 'object',
      fields: [
        {name: 'en', title: 'EN', type: 'string'},
        {name: 'no', title: 'NO', type: 'string'},
      ],
    },
    {
      name: 'pagesSection',
      title: 'Pages Section',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'page'}],
        },
      ],
    },
  ],
}
