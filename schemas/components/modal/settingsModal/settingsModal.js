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
    {
      name: 'nameModal',
      title: 'Name Modal',
      type: 'object',
      validation: (Rule) => Rule.required(),
      options: {
        columns: 2,
      },
      fields: [
        {
          name: 'en',
          title: 'EN',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'no',
          title: 'NO',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'queryParameter',
      title: 'Query Parameter',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: (doc) => {
          return `${doc.settings.nameModal.en}`
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
