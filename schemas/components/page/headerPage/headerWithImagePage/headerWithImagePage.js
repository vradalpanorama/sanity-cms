export default {
  name: 'headerWithImagePage',
  title: 'Header With Image',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false,
  },
  // validation: (Rule) => Rule.required(),
  fields: [
    {
      name: 'image',
      title: 'Image Header',
      type: 'imageHeaderWithImage',
      options: {
        collapsible: true,
        collapsed: false,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Content Header',
      type: 'contentHeaderWithImage',
      validation: (Rule) => Rule.required(),
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
  ],
}
