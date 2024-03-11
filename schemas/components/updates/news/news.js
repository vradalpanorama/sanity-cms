import {FaRegNewspaper} from 'react-icons/fa'

export default {
  name: 'news',
  title: 'News',
  type: 'document',
  icon: FaRegNewspaper,
  fields: [
    {
      name: 'settings',
      title: 'Settings news',
      type: 'settingsNews',
    },
    {
      name: 'header',
      title: 'Header news',
      type: 'headerNews'
    },
    {
      name: 'content',
      title: 'Content News',
      type: 'contentNews'
    }
  ],
  orderings: [
    {
      title: 'Release Date, New',
      name: 'releaseDateDesc',
      by: [{field: 'settings.datePub', direction: 'desc'}],
    },
    {
      title: 'Release Date, Old',
      name: 'releaseDateAsc',
      by: [{field: 'settings.datePub', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'settings.seoAndSocial.title.en',
      subtitle: 'settings.slug.current',
      media: 'header.image',
      isPrivate: 'settings.isPrivate',
    },
    prepare({title, subtitle, media, isPrivate}) {
      const titleText = isPrivate ? `(🔒) — ${title}` : title
      return {
        title: titleText,
        subtitle: `/${subtitle}`,
        media,
      }
    },
  },

}
