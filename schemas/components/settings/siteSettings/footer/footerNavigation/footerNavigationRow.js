import {CgMenuLeftAlt} from 'react-icons/cg'
export default {
  name: 'footerNavigationRow',
  title: 'Footer Navigation Rows',
  type: 'object',
  icon: CgMenuLeftAlt,
  fields: [
    {
      name: 'rows',
      title: 'Rows',
      type: 'array',
      validation: (Rule) => Rule.required().min(1).max(3),
      of: [
        {
          type: 'footerNavigationSection',
        },
      ],
    },
  ],
  preview: {
    select: {
      rows: 'rows',
    },
    prepare({rows}) {
      const title = rows.map((row) => `${row.title.en} (${row.pagesSection.length})`)
      return {
        title: title.join(' / '),
        subtitle: rows.length > 1 ? `${rows.length} rows` : 'One row',
      }
    },
  },
}
