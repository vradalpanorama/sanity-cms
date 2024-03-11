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
      type: 'headerMainPage',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Content',
      type: 'contentMainPage',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'settings.seoAndSocial.title.en',
    },
    prepare({title}) {
      return {
        title: `Main Page | ${title}`,
      }
    },
  },
}
