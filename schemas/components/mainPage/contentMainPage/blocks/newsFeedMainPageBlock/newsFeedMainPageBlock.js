import {MdOutlineDynamicFeed} from 'react-icons/md'

export default {
  name: 'newsFeedMainPageBlock',
  type: 'object',
  title: 'News Feed on Main Page',
  icon: MdOutlineDynamicFeed,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title on News Feed',
    },
    {
      name: 'bottom',
      title: 'Bottom part',
      type: 'object',
      fields: [
        {
          name: 'description',
          type: 'string',
          title: 'Description button',
        },
        {
          name: 'button',
          type: 'string',
          title: 'Button name',
          description: 'Show all news -> /news',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      description: 'bottom.description',
      button: 'bottom.button',
    },
    prepare({title, description, button}) {
      return {
        title: `News Feed | ${title}`,
        subtitle: `${description} (${button})`,
        media: MdOutlineDynamicFeed,
      }
    },
  },
}
