import {slugify} from 'transliteration'

export default {
  name: 'settingsModal',
  title: 'Settings Modal',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    {name: 'nameModal', title: 'Name Modal', type: 'string', validation: (Rule) => Rule.required()},
    {
      name: 'queryParameter',
      title: 'Query Parameter',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: (doc) => {
          return `${doc.settings.nameModal}`
        },
        maxLength: 200,
        slugify: (input) => {
          const slug = slugify(input.replace(/\./g, ' '))
          return slug
        },
      },
    },
  ],
}
