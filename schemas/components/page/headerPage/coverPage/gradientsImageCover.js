const gradientTopStartPointList = [
  { label: 'new-blue', value: '#0064df'},
  { label: 'old-blue', value: '#62a9ff'},
  { label: 'Custom starting point color...', value: 'custom' },
]

const gradientTopEndPointList = [
  { label: 'end-pont', value: '#38a9ff00'},
  { label: 'Custom ending point color... (use alpha: 0.0)', value: 'custom' },
]

export default {
  name: 'gradientsImageCover',
  title: 'Gradients',
  type: 'object',
  options: {
    collapsible: false,
    collapsed: false,
  },
  fields: [
    {
      name: 'gradientTop',
      type: 'object',
      title: 'Gradient at the top!',
      description:
        'Gradient (usually blue) in the upper left corner for contrast in the menu and the text on the cover',
      options: {
        collapsible: false,
        collapsed: false,
      },
      fields: [
        {
          name: 'startPoint',
          type: 'simplerColor',
          title: 'The starting point of the gradient',
          // initialValue: gradientTopStartPointList[0],
          validation: (Rule) => Rule.required(),
          options: {
            enableAlpha: true,
            colorList: gradientTopStartPointList,
          },
        },
        {
          name: 'endPoint',
          type: 'simplerColor',
          title: 'The ending point of the gradient',
          // initialValue: gradientTopEndPointList[0],
          validation: (Rule) => Rule.required(),
          options: {
            enableAlpha: true,
            colorList: gradientTopEndPointList,
          },
        },
        {
          name: 'endPointEdge',
          type: 'number',
          title: 'The edge of the gradient endpoint',
          // initialValue: 50.9,
          validation: (Rule) => Rule.required().max(65).min(40),
        },
        {
          name: 'deg',
          type: 'number',
          title: 'Gradient color slope',
          description: 'From the upper left corner (347deg)',
          // initialValue: 347,
          validation: (Rule) => Rule.required().max(355).min(335),
        },
        {
          name: 'opacityGradient',
          type: 'number',
          title: 'Opacity Gradient',
          description: 'from 0 to 1 (0% - 100%)',
          // initialValue: 0.5,
          validation: (Rule) => Rule.required().max(1).min(0),
        },
      ],
    },
    {
      name: 'gradientBottom',
      type: 'object',
      title: 'Gradient at the bottom',
      description:
        'White gradient at the bottom for a smooth transition to the main content of the page',
      options: {
        collapsible: false,
        collapsed: false,
      },
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: 'startPointEdge',
          title: 'The edge of the gradient endpoint',
          type: 'number',
          // initialValue: 20,
          validation: (Rule) => Rule.max(25).min(5),
        },
      ],
    },
  ],
}
