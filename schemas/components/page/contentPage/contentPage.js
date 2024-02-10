export default {
    name: 'contentPage',
    title: 'Content Page',
    type: 'object',
    options: {
      collapsible: true,
      collapsed: false,
    },
    fields: [
      {
        name: 'en',
        title: 'EN',
        type: 'contentBlocksPage',
      },
      {
        name: 'no',
        title: 'NO',
        type: 'contentBlocksPage',
      },
    ],
  }
  