export default {
    name: 'imageHeaderNews',
    title: 'Image Header News',
    type: 'image',
    options: {
      collapsible: true,
      collapsed: false,
      hotspot: true,
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
    ],
  }
 
  
  