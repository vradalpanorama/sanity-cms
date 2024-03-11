import React from 'react'
import {BsFillStopBtnFill} from 'react-icons/bs'
import SVG from 'react-inlinesvg'

export default {
  name: 'actionButton',
  title: 'Action Button',
  type: 'object',
  validation: (Rule) => Rule.required(),
  fields: [
    {
      name: 'nameActionButton',
      title: 'Name Action Button',
      type: 'object',
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: 'type',
          title: 'Type Name Button',
          type: 'string',
          validation: (Rule) => Rule.required(),
          options: {
            list: [
              {title: 'Only Icon', value: 'icon'},
              {title: 'Only Title', value: 'title'},
              {title: 'Title and Icon', value: 'title&icon'},
            ],
            direction: 'horizontal',
            layout: 'radio',
          },
        },
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          hidden: ({parent}) => parent?.type !== 'title' && parent?.type !== 'title&icon',
          validation: (Rule) =>
            Rule.custom((value, {parent}) => {
              if (parent?.type === 'title' || parent?.type === 'title&icon') {
                if (!value) {
                  return 'fill in the button name fields'
                } else {
                  return true
                }
              } else {
                return true
              }
            }),
        },
        {
          name: 'icon',
          title: 'Icon',
          type: 'object',
          hidden: ({parent}) => parent?.type !== 'icon' && parent?.type !== 'title&icon',
          validation: (Rule) =>
            Rule.custom((value, {parent}) => {
              if (parent?.type === 'icon' || parent?.type === 'title&icon') {
                if (!value) {
                  return 'fill in the button icon fields'
                } else {
                  return true
                }
              } else {
                return true
              }
            }),
          fields: [
            {
              name: 'pickerIcon',
              title: 'Search and select icon',
              type: 'iconPicker',
              validation: (Rule) => Rule.required(),
              options: {
                storeSvg: true,
              },
            },
            {
              name: 'location',
              title: 'Icon location',
              type: 'string',
              validation: (Rule) => Rule.required(),
              options: {
                list: [
                  {title: 'on the left', value: 'left'},
                  {title: 'on the right', value: 'right'},
                ],
                direction: 'horizontal',
                layout: 'radio',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'clickAction',
      title: 'Click Action',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      to: [{type: 'page'}, {type: 'section'}, {type: 'modal'}, {type: 'externalLink'}],
    },
  ],
  preview: {
    select: {
      type: 'nameActionButton.type',
      title: 'nameActionButton.title',
      icon: 'nameActionButton.icon',
    },
    prepare({type, title, icon}) {
      return {
        title: type === 'icon' ? 'Button with icon' : title.en,
        subtitle: type === 'icon' ? '' : title.no,
        media: type === 'title' ? BsFillStopBtnFill : <SVG src={icon.pickerIcon.svg} />,
      }
    },
  },
}
