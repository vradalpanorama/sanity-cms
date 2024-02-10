export default {
  name: 'layoutSettingsTwoCellsBlock',
  type: 'object',
  title: 'LayoutSettingsTwoCells',
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    {
      name: 'desktopWidthFormatLayout',
      type: 'string',
      title: 'Desktop and Tablet Width Format Layout',
      description: 'Сell width proportions',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {title: '30% / 60%', value: '30:60'},
          {title: '40% / 50%', value: '40:50'},
          {title: '50% / 40%', value: '50:40'},
          {title: '60% / 30%', value: '60:30'},
        ],
        layout: 'radio',
        direction: 'horizontal'
      },
    },
    {
      name: 'desktopAlignFormatLayout',
      type: 'string',
      title: 'Desktop and Tablet Align Format Layout',
      description: 'Which side should the cells be aligned on?',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {title: 'to the top', value: 'flex-start'},
          {title: 'to the center', value: 'center'},
          {title: 'to the bottom', value: 'flex-end'},
        ],
        layout: 'radio',
        direction: 'horizontal'
      },
    },
    {
      name: 'mobileFormatLayout',
      type: 'string',
      title: 'Mobile Format Layout',
      description: 'How are the cells located on the mobile layout?ns',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {title: '1 cell - top, 2 cell - bottom', value: '1:2'},
          {title: '2 cell - top, 1 cell - bottom', value: '2:1'},
        ],
        layout: 'radio',
        direction: 'horizontal'
      },
    },
  ],
}
