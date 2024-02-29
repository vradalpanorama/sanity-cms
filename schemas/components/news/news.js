import {FaRegNewspaper} from 'react-icons/fa'

export default {
  name: 'news',
  title: 'News',
  type: 'document',
  icon: FaRegNewspaper,
  fields: [
    {
      name: 'title',
      title: 'title',
      type: 'string',
    },
  ],
  //   preview: {
  //     select: {
  //       title: 'settings.namePage.en',
  //       isLandingPage: 'settings.pathname.isLandingPage',
  //       sectionSlug: 'settings.pathname.section.slug.current',
  //       sectionIcon: 'settings.pathname.section.icon',
  //       slug: 'settings.pathname.slug.current',
  //     },
  //     prepare({title, sectionSlug, slug, sectionIcon, isLandingPage}) {
  //       return {
  //         title: title,
  //       }
  //     },
  //   },
}
