import React from 'react'
import SVG from 'react-inlinesvg'

export default {
  name: 'promoResortWidget',
  type: 'object',
  title: 'Promo on Resort Widget',
  validation: (Rule) => Rule.required(),
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'object',
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: 'en',
          title: 'EN',
          type: 'string',
        },
        {
          name: 'no',
          title: 'NO',
          type: 'string',
        },
      ],
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'object',
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: 'type',
          title: 'Icon Type',
          type: 'string',
          validation: (Rule) => Rule.required(),
          options: {
            list: [
              {title: 'Upload an icon', value: 'upload'},
              {title: 'Select an icon from the available ones', value: 'picker'},
            ],
            direction: 'horizontal',
            layout: 'radio',
          },
        },
        {
          name: 'upload',
          title: 'Upload Icon',
          description: 'upload SVG',
          type: 'image',
          hidden: ({parent}) => parent?.type !== 'upload',
          validation: (Rule) =>
            Rule.custom((value, {parent}) => {
              if (parent?.type === 'upload') {
                return value ? true : 'need SVG'
              } else {
                return true
              }
            }),
        },
        {
          name: 'picker',
          title: 'Search and select icon',
          type: 'iconPicker',
          options: {
            collapsible: false,
            storeSvg: true,
          },
          hidden: ({parent}) => parent?.type !== 'picker',
          validation: (Rule) =>
            Rule.custom((value, {parent}) => {
              if (parent?.type === 'picker') {
                return value ? true : 'select icon'
              } else {
                return true
              }
            }),
        },
      ],
    },
    {
      name: 'clickAction',
      title: 'Click Action',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      to: [
        {type: 'page'},
        {type: 'section'},
        {type: 'modal'},
        {type: 'news'},
        {type: 'externalLink'},
      ],
    },
  ],
  preview: {
    select: {
      title: 'title.en',
      icon: 'icon',
      clickAction: 'clickAction->',
    },
    prepare({title, icon, clickAction}) {
      console.log('clickAction promo', clickAction)
      return {
        title,
        media: icon?.type === 'upload' ? icon?.upload : <SVG src={icon.picker.svg} />,
      }
    },
  },
}
