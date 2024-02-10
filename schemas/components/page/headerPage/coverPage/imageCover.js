export default {
  name: 'imageCover',
  title: 'Cover Image',
  type: 'image',
  options: {
    hotspot: true,
    metadata: ['lqip', 'palette'],
    collapsible: true,
    collapsed: false,
  },
  fields: [
    {
      name: 'caption',
      title: 'Caption',
      type: 'object',
      options: {
        collapsible: false,
        columns: 2,
      },
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
      name: 'gradients',
      title: 'Gradients setting',
      type: 'gradientsImageCover',
    },
  ],
}
