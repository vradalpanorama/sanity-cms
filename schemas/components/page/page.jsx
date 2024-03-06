import React from 'react'
import SVG from 'react-inlinesvg'
import {RiPagesLine} from 'react-icons/ri'
// import {PagePreview} from './pagePreview'

export default {
  name: 'page',
  title: 'Site pages',
  type: 'document',
  icon: RiPagesLine,
  fields: [
    {
      name: 'settings',
      title: 'Settings',
      type: 'settingsPage',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'header',
      title: 'Header',
      type: 'headerPage',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Content',
      type: 'contentPage',
      validation: (Rule) => Rule.required(),
    },
  ],
  // components: {preview: PagePreview},
  preview: {
    select: {
      title: 'settings.namePage.en',
      isSectionPage: 'settings.pathname.isSectionPage',
      sectionSlug: 'settings.pathname.section.slug.current',
      sectionIcon: 'settings.pathname.section.icon',
      slug: 'settings.pathname.slug.current',
    },
    prepare({title, sectionSlug, slug, sectionIcon, isSectionPage}) {
      return {
        title: title,
        subtitle: `${isSectionPage && sectionSlug ? '/' + sectionSlug : ''}/${slug}`,
        media: isSectionPage ? <SVG src={sectionIcon.svg} /> : RiPagesLine,
      }
    },
  },
  orderings: [
    {
      title: 'Sections',
      name: 'sectionsAsc',
      by: [
        {field: 'settings.pathname.section.title.en', direction: 'asc'}
      ]
    }
  ]
}
