export default {
  name: 'coverPage',
  title: 'Cover Page',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    {
      name: 'content',
      title: 'Content Cover',
      type: 'contentCover',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image Cover',
      type: 'imageCover',
      validation: (Rule) => Rule.required(),
    },
  ],
}
