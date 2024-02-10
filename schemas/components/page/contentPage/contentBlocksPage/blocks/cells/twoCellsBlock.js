import {VscLayoutSidebarRightOff} from 'react-icons/vsc'

export default {
  name: 'twoCellsBlock',
  type: 'object',
  title: 'Two Cells',
  icon: VscLayoutSidebarRightOff,
  fields: [
    {
      name: 'cell',
      type: 'array',
      validation: (Rule) => Rule.required().min(2).max(2),
      title: 'Cell',
      of: [{type: 'textBlock'}, {type: 'detailsBlock'}, {type: 'imageBlock'}],
    },
    {
      name: 'layoutSettings',
      type: 'layoutSettingsTwoCellsBlock',
      title: 'layoutSettingsTwoCells',
      validation: (Rule) => Rule.required(),
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
        subtitle: 'Two Cells',
      }
    },
  },
}
