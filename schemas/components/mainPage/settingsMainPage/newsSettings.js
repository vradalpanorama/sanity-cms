export default {
  name: 'newsSettings',
  title: 'News Settings',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    {
      name: 'mainNewsFormat',
      title: 'Main News',
      type: 'string',
      initialValue: 'last',
      options: {
        list: [
          {title: 'Last', value: 'last'},
          {title: 'Selected', value: 'selected'},
        ],
        direction: 'horizontal',
        layout: 'radio',
      },
    },
    {
      name: 'mainNews',
      title: 'Main News',
      type: 'reference',
      to: [{type: 'news'}],
      hidden: ({document}) => document.settings.news?.mainNewsFormat !== 'selected',
    },
    {
      name: 'mainTab',
      title: 'Main Tab',
      type: 'string',
      initialValue: 'all',
      options: {
        list: [
          {title: 'All', value: 'all'},
          {title: 'News', value: 'news'},
          {title: 'Events', value: 'events'},
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    },
    {
      name: 'newsFeed',
      type: 'object',
      title: 'News Feed',
      options: {
        collapsible: true,
        collapsed: false,
        columns: 2,
      },
      fields: [
        {
          name: 'desktopRowNews',
          title: 'news lines on desktop',
          type: 'string',
          initialValue: '1',
          options: {
            list: [
              {title: 'Main news and 1 row (3 news)', value: '1'},
              {title: 'Main news and 2 rows (6 news)', value: '2'},
              {title: 'Main news and 3 rows (9 news)', value: '3'},
            ],
            layout: 'radio',
          },
        },
        {
          name: 'mobileNumberNews',
          title: 'number of news on mobile',
          type: 'string',
          initialValue: '1',
          options: {
            list: [
              {title: 'Main news and 3 news', value: '3'},
              {title: 'Main news and 5 news', value: '5'},
              {title: 'Main news and 8 news', value: '8'},
            ],
            layout: 'radio',
          },
        },
      ],
    },
  ],
}
