import {MdOutlineDynamicFeed} from 'react-icons/md'
export default {
  name: 'newsFeed',
  title: 'News Feed',
  type: 'document',
  icon: MdOutlineDynamicFeed,
  fields: [
    {
      name: 'content',
      title: 'Content on News Feed',
      type: 'contentNewsFeed',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'countPreview',
      title: 'The number of news in the feed',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {title: 'Promo news and 3 news in a row (4 news)', value: '4'},
          {title: 'Promo news and 6 news in two rows (7 news)', value: '7'},
          {title: 'Promo news and 9 news in two rows (10 news)', value: '10'},
        ],
      },
    },
    {
      name: 'activeTab',
      title: 'Active Tab',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {title: 'All (news & events)', value: 'all'},
          {title: 'News', value: 'news'},
          {title: 'Events', value: 'events'},
        ],
        direction: 'horizontal',
        layout: 'radio',
      },
    },
    {
      name: 'typeFormation',
      title: 'Type of news feed formation',
      description: 'For ALL tab',
      type: 'string',
      hidden: ({parent}) => parent?.activeTab !== 'all',
      options: {
        list: [
          {title: 'Automatically, from new to old news', value: 'auto'},
          {title: 'A manually compiled news list', value: 'manually'},
        ],
        direction: 'horizontal',
        layout: 'radio',
      },
    },
    {
      name: 'manually',
      title: 'Manually NewsFeed',
      type: 'manuallyNewsFeed',
      hidden: ({parent}) => parent?.activeTab !== 'all' || parent?.typeFormation !== 'manually',
    },
  ],
  preview: {
    select: {
      number: 'countPreview',
      tab: 'activeTab',
      typeFormation: 'typeFormation',
      expiresDate: 'manually.expiresDate',
    },
    prepare({number, tab, typeFormation, expiresDate}) {
      if (tab === 'all') {
        if (typeFormation === 'manually') {
          const now = new Date()
          const expireDate = new Date(expiresDate)
          if (expireDate <= now) {
            return {
              title: `ATTENTION: The manual list has expired, the automatic news output is displayed`,
            }
          } else {
            return {
              title: `The manual list until ${expireDate.toString().split(' ').slice(1, 4).join(' ')} | ${number} news on feed`,
            }
          }
        }
        return {
          title: `${number} news on feed | ${tab.toUpperCase()} tab | Automatic collection of news lists`,
        }
      } else {
        return {
          title: `${number} news on feed | ${tab.toUpperCase()} tab`,
        }
      }
    },
  },
}
