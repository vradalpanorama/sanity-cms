export default {
    name: 'contentMainPage',
    title: 'Content Main Page',
    type: 'object',
    options: {
      collapsible: true,
      collapsed: false,
    },
    fields: [
      {
        name: 'en',
        title: 'EN',
        type: 'contentBlocksMainPage',
      },
      {
        name: 'no',
        title: 'NO',
        type: 'contentBlocksMainPage',
      },
    ],
  }
  