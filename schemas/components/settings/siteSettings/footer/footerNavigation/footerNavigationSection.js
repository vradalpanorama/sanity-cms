import { RxSection } from "react-icons/rx";

export default {
  name: 'footerNavigationSection',
  title: 'Footer Navigation Section',
  type: 'object',
  icon: RxSection,
  fields: [
    {
      name: 'title',
      title: 'Title Section',
      type: 'object',
      validation: (Rule) => Rule.required(),
      fields: [
        {name: 'en', title: 'EN', type: 'string', validation: (Rule) => Rule.required()},
        {name: 'no', title: 'NO', type: 'string', validation: (Rule) => Rule.required()},
      ],
    },
    {
      name: 'pagesSection',
      title: 'Pages Section',
      type: 'array',
      validation: (Rule) => Rule.required().min(1).max(10),
      of: [
        {
          type: 'reference',
          to: [
            {type: 'page'},
            {type: 'section'},
            {type: 'externalLink'},
            {type: 'modal'},
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title.en',
      pagesSection: 'pagesSection'
    },
    prepare({title, pagesSection}) {
      return {
        title,
        subtitle: `${pagesSection.length} ${pagesSection.length > 1 ? 'pages' : 'page'}`,
      }
    },
  },
}
