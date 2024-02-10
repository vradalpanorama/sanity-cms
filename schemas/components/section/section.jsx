import React from 'react'
import {Icon} from '@iconify/react'
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
        showName: true,
        collapsible: false,
      },
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
      media: 'icon',
    },
    prepare({title, media}) {
      return {
        title: title,
        media: <Icon icon={media.name} />,
      }
    },
  },
}
