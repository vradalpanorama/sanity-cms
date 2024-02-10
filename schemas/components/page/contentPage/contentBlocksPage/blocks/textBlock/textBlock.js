import { VscListSelection } from "react-icons/vsc";

export default {
  name: 'textBlock',
  title: 'Text Block',
  type: 'object',
  icon: VscListSelection,
  validation: (Rule) => Rule.required(),
  fields: [
    {
      name: 'header',
      type: 'string',
      title: 'Header',
    },
    {
      name: 'lead',
      type: 'text',
      title: 'Lead',
    },
    {
      name: 'list',
      type: 'array',
      title: 'List elements',
      description: "you can ignore the field if you don't need the list.",
      of: [{type: 'string'}],
    },
  ],
  preview: {
    select: {
      title: 'header',
      lead: 'lead',
    },
    prepare({title, lead}) {
      return {
        title: title ? title : 'Block Text',
        subtitle: lead ? lead : '',
      }
    },
  },
}
