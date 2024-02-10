import {slugify} from 'transliteration'

const shouldShowSection = (document) => document.settings?.pathname?.isLandingPage;

export default {
  name: 'pathnamePage',
  title: 'Pathname',
  type: 'object',
  options: {
    
  },
  fields: [
    {
      name: 'isLandingPage',
      title: 'Is Landing Page?',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'section',
      title: 'Section',
      type: 'reference',
      hidden: ({document}) => shouldShowSection(document),
      validation: (Rule) =>
        Rule.custom((sectionValue, {document}) =>
        !shouldShowSection(document) && sectionValue === undefined
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
