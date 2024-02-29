import {slugify} from 'transliteration'

export default {
  name: 'pathnamePage',
  title: 'Pathname',
  type: 'object',
  options: {},
  fields: [
    {
      name: 'isSectionPage',
      title: 'Is Section Page?',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'section',
      title: 'Section',
      type: 'reference',
      hidden: ({document}) => !document.settings?.pathname?.isSectionPage,
      validation: (Rule) =>
        Rule.custom((sectionValue, {document}) =>
          document.settings?.pathname?.isSectionPage && sectionValue === undefined
            ? 'You need to select a section!'
            : true,
        ),
      to: [{type: 'section'}],
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: (doc) => {
          return `${doc.settings.namePage.en}`
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
