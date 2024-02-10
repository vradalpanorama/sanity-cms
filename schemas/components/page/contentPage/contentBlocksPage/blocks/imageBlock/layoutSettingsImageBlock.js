export default {
    name: 'layoutSettingsImageBlock',
    type: 'object',
    title: 'layout Settings BlockImage',
    options: {
      collapsible: true,
      collapsed: false,
    },
    fields: [
      {
        name: 'aspectRatioFormatLayout',
        type: 'string',
        title: 'Aspect ratio',
        description: 'In what format should the image be displayed?',
        validation: (Rule) => Rule.required(),
        options: {
          list: [
            {title: '3 / 4', value: '3/4'},
            {title: 'square', value: '9/9'},
            {title: '16 / 9', value: '16/9'},
            {title: 'original sides of image', value: 'unset'},
          ],
          layout: 'radio',
          direction: 'horizontal'
        },
      },
    ],
  }
  