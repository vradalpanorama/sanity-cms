import React from 'react'
import SVG from 'react-inlinesvg';
import { IoIosMenu } from "react-icons/io";

export default {
  name: 'menuSectionNavigation',
  title: 'Section Navigation',
  type: 'object',
  icon: IoIosMenu,
  fields: [
    {
      name: 'menuSection',
      title: 'Menu Section',
      type: 'reference',
      to: [{type: 'section'}],
    },
    {
      name: 'pagesSection',
      title: 'Pages Section',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'page'}],
        },
      ],
    },
  ],
  preview: {
    select: {
      sectionTitle: 'menuSection.title.en',
      sectionIcon: 'menuSection.icon',
      pages: 'pagesSection'
    },
    prepare({sectionTitle, sectionIcon, pages}) {
      return {
        title: `${sectionTitle} [${pages.length}]`,
        media: <SVG src={sectionIcon.svg} />,
      }
    },
  },
}
