import {VscNote} from 'react-icons/vsc'

export default {
  name: 'detailsBlock',
  title: 'Details Block',
  type: 'object',
  icon: VscNote,
  validation: (Rule) => Rule.required(),
  fields: [
    {
      name: 'header',
      type: 'string',
      title: 'Header',
      description: "you can ignore the field if you don't need the header.",
    },
    {
      name: 'lead',
      type: 'text',
      title: 'Lead',
      rows: 5,
      description: "you can ignore the field if you don't need the lead text.",
    },
    {
      name: 'list',
      type: 'array',
      title: 'List',
      description: "you can ignore the field if you don't need the list.",
      of: [{type: 'string'}],
    },
  ],
  preview: {
    select: {
      title: 'header',
      lead: 'lead',
      list: 'list',
    },
    prepare({title, lead, list}) {
      return {
        title: title ? title : 'Block Details',
        subtitle: lead ? lead : list.join(' '),
      }
    },
  },
}
