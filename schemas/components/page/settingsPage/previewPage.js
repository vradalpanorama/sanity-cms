export default {
  name: 'previewPage',
  title: 'Preview Page',
  type: 'image',
  options: {
    collapsible: true,
    collapsed: false,
    hotspot: true,
  },
  fields: [
    {
      name: 'caption',
      title: 'caption',
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
  ],
}
