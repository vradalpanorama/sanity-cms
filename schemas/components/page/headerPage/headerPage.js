export default {
  name: 'headerPage',
  title: 'Header Page',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    {
      name: 'typeHeaderPage',
      title: 'Type Header Page',
      type: 'string',
      options: {
        list: [
          {title: 'Cover', value: 'cover'},
          {title: 'Header with image', value: 'headerWithImage'},
        ],
        direction: 'horizontal',
        layout: 'radio',
      },
    },
    {
      name: 'cover',
      title: 'cover',
      type: 'coverPage',
      hidden: ({parent}) => parent?.typeHeaderPage !== 'cover',
      validation: (Rule) =>
        Rule.custom((coverValue, {parent}) =>
          parent?.typeHeaderPage === 'cover' && coverValue === undefined
            ? 'You need to select the Cover!'
            : true,
        ),
    },
    {
      name: 'headerWithImage',
      title: 'Header with image',
      type: 'headerWithImagePage',
      hidden: ({parent}) => parent?.typeHeaderPage !== 'headerWithImage',
      validation: (Rule) =>
        Rule.custom((headerValue, {parent}) =>
          parent?.typeHeaderPage === 'headerWithImage' && headerValue === undefined
            ? 'You need to select the Header with image!'
            : true, 
        ),
    },
  ],
}
