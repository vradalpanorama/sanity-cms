import React from 'react'
import SVG from 'react-inlinesvg';
import {RiPagesLine} from 'react-icons/ri'
// import {PagePreview} from './pagePreview'

export default {
  name: 'page',
  title: 'Page',
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
      isLandingPage: 'settings.pathname.isLandingPage',
      sectionSlug: 'settings.pathname.section.slug.current',
      sectionIcon: 'settings.pathname.section.icon',
      slug: 'settings.pathname.slug.current',
    },
    prepare({title, sectionSlug, slug, sectionIcon, isLandingPage}) {
      return {
        title: title,
        subtitle: `${sectionSlug ? '/' + sectionSlug : ''}/${slug}`,
        media: isLandingPage ? RiPagesLine : <SVG src={sectionIcon.svg} />,
      }
    },
  },
}
