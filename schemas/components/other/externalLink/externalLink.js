import {slugify} from 'transliteration'
import {FiLink} from 'react-icons/fi'

export default {
  name: 'externalLink',
  title: 'External Link',
  type: 'document',
  icon: FiLink,
  fields: [
    {
      name: 'linkName',
      title: 'Link Name',
      type: 'object',
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: 'en',
          title: 'EN',
          type: 'string',
        },
        {
          name: 'no',
          title: 'NO',
          type: 'string',
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
          return `${doc.linkName.en}`
        },
        maxLength: 200,
        slugify: (input) => {
          const slug = slugify(input.replace(/\./g, ' '))
          return slug
        },
      },
    },
    {
      name: 'linkURL',
      title: 'Link URL',
      type: 'url',
      validation: (Rule) =>
        Rule.required().uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    },
  ],
  preview: {
    select: {
      title: 'linkName.en',
      link: 'linkURL',
      query: 'queryParameter',
    },
    prepare({title, link, query}) {
      return {
        title: `${title} - /redirect?to=${query.current}`,
        subtitle: link,
      }
    },
  },
}
