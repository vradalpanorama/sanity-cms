export default {
  name: 'contentModal',
  title: 'Content Modal',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    {
      name: 'en',
      title: 'EN',
      type: 'contentBlocksModal',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
    {
      name: 'no',
      title: 'NO',
      type: 'contentBlocksModal',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
  ],
}
