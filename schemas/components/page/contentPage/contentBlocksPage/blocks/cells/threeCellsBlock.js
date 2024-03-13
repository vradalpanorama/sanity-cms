import {BsLayoutThreeColumns} from 'react-icons/bs'

export default {
  name: 'threeCellsBlock',
  type: 'object',
  title: 'Three Cells',
  icon: BsLayoutThreeColumns,
  fields: [
    {
      name: 'cell',
      type: 'array',
      validation: (Rule) => Rule.required().min(3).max(3),
      title: 'Cell',
      of: [{type: 'detailsBlock'}],
    },
  ],
  preview: {
    select: {
      cell: 'cell',
    },
    prepare({cell}) {
      const titleText = cell.map((c) => c['_type']).join(' and ')
      return {
        title: titleText,
        subtitle: 'Three Cells',
      }
    },
  },
}
