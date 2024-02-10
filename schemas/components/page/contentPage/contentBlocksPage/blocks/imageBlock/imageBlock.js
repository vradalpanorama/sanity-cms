import {IoImageOutline} from 'react-icons/io5'

export default {
  name: 'imageBlock',
  title: 'Image Block',
  type: 'object',
  icon: IoImageOutline,
  validation: (Rule) => Rule.required(),
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      description: 'Set hotspot on image!',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
        metadata: ['lqip', 'palette'],
      },
      fields: [
        {
            name: 'alt',
            type: 'string',
            title: 'Alt caption',
            validation: (Rule) => Rule.required(),
        }
      ]
    },
    {
      name: 'layoutSettings',
      title: 'Layout Settings Image Block',
      type: 'layoutSettingsImageBlock',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      alt: 'img.alt',
      media: 'img'
    },
    prepare({alt, media}) {
      return {
        title: 'Block Image',
        subtitle: alt,
        media
      }
    },
  },
}
