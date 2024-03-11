import {BsWindowDesktop} from 'react-icons/bs'

export default {
  name: 'resortWidgetSettings',
  type: 'document',
  title: 'Resort Widget on Main Page',
  icon: BsWindowDesktop,
  fields: [
    {
      name: 'type',
      type: 'string',
      title: 'Type Resort Widget',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {title: 'Winter season', value: 'winter'},
          {title: 'Summer season', value: 'summer'},
        ],
        direction: 'horizontal',
        layout: 'radio',
      },
    },
    {
      name: 'maxWidth',
      title: 'Maximum width of the "Resort conditions" section',
      type: 'object',
      validation: (Rule) => Rule.required(),
      options: {
        columns: 2,
      },
      fields: [
        {
          name: 'tablet',
          title: 'Tablet max-width',
          type: 'number',
          intialValue: 40,
          validation: (Rule) => Rule.required().min(30).max(65),
        },
        {
          name: 'desktop',
          title: 'Desktop max-width',
          type: 'number',
          intialValue: 45,
          validation: (Rule) => Rule.required().min(40).max(70),
        },
      ],
    },
    {
      name: 'promo',
      title: 'Promo offers section',
      type: 'array',
      validation: (Rule) => Rule.required().min(1).max(4),
      of: [{type: 'promoResortWidget'}],
    },
  ],
  preview: {
    select: {
      type: 'type',
      promo: 'promo',
    },
    prepare({type, promo}) {
      return {
        title: `Resort Widget | ${type} type`,
        subtitle: `${promo.length} promo`,
        media: BsWindowDesktop,
      }
    },
  },
}
