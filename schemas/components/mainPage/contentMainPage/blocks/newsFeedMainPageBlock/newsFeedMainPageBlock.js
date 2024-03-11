import {MdOutlineDynamicFeed} from 'react-icons/md'

export default {
  name: 'newsFeedMainPageBlock',
  type: 'object',
  title: 'News Feed on Main Page',
  icon: MdOutlineDynamicFeed,
  fields: [
    {
      name: 'newsFeed',
      title: 'News Feed',
      validation: (Rule) => Rule.required(),
      type: 'reference',
      options: {
        disableNew: true,
      },
      to: [{type: 'newsFeed'}],
    },
  ],
  preview: {
    select: {
      newsFeed: 'newsFeed',
    },
    prepare({title, description, button}) {
      return {
        title: `News Feed`,
        subtitle: `on Main Page`,
        media: MdOutlineDynamicFeed,
      }
    },
  },
}
