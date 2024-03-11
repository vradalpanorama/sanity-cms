export default {
  name: 'manuallyNewsFeed',
  title: 'Manually News Feed',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    {
      name: 'expiresDate',
      title: 'When does the news list expire?',
      type: 'date',
      validation: (Rule) =>
        Rule.custom((dateValue) => {
          if (document.typeFormation === 'manually' && document.activeTab === 'all') {
            const now = new Date()
            return new Date(dateValue) <= now
              ? `It is necessary to choose a date a few days longer than ${now.toString().split(' ').slice(1, 4).join(' ')}`
              : true
          } else {
            return true
          }
        }),
    },
    {
      name: 'list',
      title: 'List',
      description: 'First - promo news',
      type: 'array',
      validation: (Rule) =>
        Rule.custom((list, {document}) => {
          if (document.typeFormation === 'manually' && document.activeTab === 'all') {
            return list?.length === parseInt(document.numberOnNewsFeed)
              ? true
              : `The number of news should be ${document.numberOnNewsFeed} news`
          } else {
            return true
          }
        }),
      of: [
        {
          type: 'reference',
          to: [{type: 'news'}],
        },
      ],
    },
  ],
}
