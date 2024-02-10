import {MdCallToAction} from 'react-icons/md'

export default {
  name: 'bannerBlock',
  type: 'object',
  title: 'Banner',
  icon: MdCallToAction,
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Banner Image',
      fields: [{name: 'caption', type: 'string', title: 'Caption'}],
    },
    {
      name: 'content',
      title: 'Banner Content',
      type: 'contentBannerBlock',
    },
    // {
    //   name: 'action',
    //   type: 'reference',
    //   title: 'On Click Banner',
    //   to: [{type: 'modal'}],
    // },
  ],
  preview: {
    select: {
      title: 'content.title',
      lead: 'content.lead',
      media: 'image',
    },
    prepare({title, lead, media}) {
      return {
        title: `BANNER | ${title}`,
        subtitle: `${lead}`,
        media: media,
      }
    },
  },
}
