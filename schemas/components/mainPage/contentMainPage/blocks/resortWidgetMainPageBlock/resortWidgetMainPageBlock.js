import {BsWindowDesktop} from 'react-icons/bs'

export default {
  name: 'resortWidgetMainPageBlock',
  type: 'object',
  title: 'Resort Widget on Main Page',
  icon: BsWindowDesktop,
  validation: (Rule) => Rule.required(),
  fields: [
    {
      name: 'resortWidget',
      title: 'Resort Widget',
      validation: (Rule) => Rule.required(),
      type: 'reference',
      options: {
        disableNew: true,
      },
      to: [{type: 'resortWidgetSettings'}]
    },
  ],
  preview: {
    select: {
      resortWidget: 'resortWidget',
    },
    prepare({resortWidget}) {
      return {
        title: `Resort Widget`,
        subtitle: `on Main Page`,
        media: BsWindowDesktop,
      }
    },
  },
}
