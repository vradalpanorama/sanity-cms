export default {
  name: 'headerNews',
  type: 'object',
  title: 'Header News',
  validation: (Rule) => Rule.required(),
  fields: [
    {
        name: 'image',
        title: 'Image Header',
        type: 'imageHeaderNews',
        options: {
          collapsible: true,
          collapsed: false,
        },
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'content',
        title: 'Content Header',
        type: 'contentHeaderNews',
        validation: (Rule) => Rule.required(),
        options: {
          collapsible: true,
          collapsed: false,
        },
      },
  ],
}
