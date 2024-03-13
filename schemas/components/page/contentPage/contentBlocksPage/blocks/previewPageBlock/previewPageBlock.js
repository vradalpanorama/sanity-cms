import {TfiLayoutColumn2} from 'react-icons/tfi'

export default {
  name: 'previewPageBlock',
  title: 'Preview Page Block',
  type: 'object',
  icon: TfiLayoutColumn2,
  validation: (Rule) => Rule.required(),
  fields: [
    {name: 'page', title: 'Page', type: 'reference', to: [{type: 'page'}]},
    {
      name: 'layoutPreview',
      title: 'layout Preview',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {title: 'Text on the left, Picture on the right', value: 'text:pic'},
          {title: 'Picture on the left, Text on the right', value: 'pic:text'},
        ],
        direction: 'horizontal',
        layout: 'radio',
      },
    },
  ],
  preview: {
    select: {
      namePage: 'page.settings.namePage.en',
      descPage: 'page.settings.seoAndSocial.description.en',
      picPage: 'page.settings.preview',
    },
    prepare({namePage, descPage, picPage}) {
      return {
        title: namePage,
        subtitle: descPage,
        media: picPage,
      }
    },
  },
}
