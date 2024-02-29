import {RiPagesLine} from 'react-icons/ri'

export default {
  name: 'mainPage',
  title: 'Main Page',
  type: 'document',
  icon: RiPagesLine,
  fields: [
    {
      name: 'settings',
      title: 'Settings',
      type: 'settingsMainPage',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'header',
      title: 'Header',
      type: 'headerPage',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Content',
      type: 'contentPage',
      validation: (Rule) => Rule.required(),
    },
  ],
  // components: {preview: PagePreview},
  preview: {
    select: {
      title: 'settings.namePage.en',
      isLandingPage: 'settings.pathname.isLandingPage',
      sectionSlug: 'settings.pathname.section.slug.current',
      sectionIcon: 'settings.pathname.section.icon',
      slug: 'settings.pathname.slug.current',
    },
    prepare({title, sectionSlug, slug, sectionIcon, isLandingPage}) {
      return {
        title: 'Main Page',
      }
    },
  },
}
