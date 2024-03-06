import React from 'react'
import SVG from 'react-inlinesvg'
import {slugify} from 'transliteration'
import {TbMenuDeep} from 'react-icons/tb'

export default {
  name: 'section',
  title: 'Sections',
  type: 'document',
  icon: TbMenuDeep,
  fields: [
    {
      name: 'icon',
      type: 'iconPicker',
      title: 'Search and select icon',
      options: {
        storeSvg: true,
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
    {
      name: 'pagesSection',
      title: 'Pages Section',
      description: 'The pages that will be in the menu and on the section page',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'page'}, {type: 'modal'}],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title.en',
      pagesSection: 'pagesSection',
      icon: 'icon',
    },
    prepare({title, icon, pagesSection}) {
      const countPagesSection = pagesSection?.length
      return {
        title: title,
        subtitle: countPagesSection
          ? `${countPagesSection} ${countPagesSection > 1 ? 'pages' : 'page'}`
          : 'No pages',
        media: <SVG src={icon.svg} />,
      }
    },
  },
}
