import React from 'react'
import SVG from 'react-inlinesvg';
import {slugify} from 'transliteration'
import {TbMenuDeep} from 'react-icons/tb'

export default {
  name: 'section',
  title: 'Section',
  type: 'document',
  icon: TbMenuDeep,
  fields: [
    {
      name: 'icon',
      type: 'iconPicker',
      title: 'Search and select icon',
      options: {
        storeSvg: true
    }
    },
    {
      name: 'title',
      title: 'Title',
      type: 'object',
      options: {
        columns: 2,
      },
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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: (doc) => `${doc.title.en}`,
        maxLength: 200,
        slugify: (input) => {
          const slug = slugify(input.replace(/\./g, ' '))
          return slug
        },
      },
    },
  ],
  preview: {
    select: {
      title: 'title.en',
      icon: 'icon',
    },
    prepare({title, icon}) {
      return {
        title: title,
        media: <SVG src={icon.svg} />,
      }
    },
  },
}
