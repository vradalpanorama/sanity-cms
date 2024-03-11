export default {
  name: 'contentNews',
  type: 'object',
  title: 'Content News',
  validation: (Rule) => Rule.required(),
  fields: [
    {
      name: 'en',
      title: 'EN',
      type: 'contentBlocksPage',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'no',
      title: 'NO',
      type: 'contentBlocksPage',
      validation: (Rule) => Rule.required(),
    },
  ],
}
