export default {
  name: 'coverPage',
  title: 'Cover Page',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false,
  },
  // validation: (Rule) => Rule.required(),
  fields: [
    {
      name: 'image',
      title: 'Image Cover',
      type: 'imageCover',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Content Cover',
      type: 'contentCover',
      validation: (Rule) => Rule.required(),
    },
  ],
}
