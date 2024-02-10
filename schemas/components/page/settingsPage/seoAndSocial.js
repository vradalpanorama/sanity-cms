export default {
  name: 'seoAndSocialPageInfo',
  title: 'SEO & Social',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    {
      name: 'title',
      title: 'Title for SEO & social sharing',
      description: 'Make it as enticing as possible to convert users in social feeds and Google searches.',
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
        name: 'description',
        title: 'Short paragraph for SEO & social sharing (meta description)',
        description: 'It\'ll help you convert more visitors Google & social.',
        type: 'object',
        options: {
          collapsible: false,
          columns: 2,
        },
        fields: [
          {
            name: 'en',
            title: 'EN',
            type: 'text',
          },
          {
            name: 'no',
            title: 'NO',
            type: 'text',
          },
        ],
      },
  ],
}
