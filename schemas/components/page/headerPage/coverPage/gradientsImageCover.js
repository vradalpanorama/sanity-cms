const gradientTopStartPointList = [
  {label: 'new-blue', value: '#0064df'},
  {label: 'old-blue', value: '#62a9ff'},
  {label: 'Custom starting point color...', value: 'custom'},
]

const gradientTopEndPointList = [
  {label: 'end-pont', value: '#38a9ff00'},
  {label: 'Custom ending point color... (use alpha: 0.0)', value: 'custom'},
]

export default {
  name: 'gradientsImageCover',
  title: 'Gradients',
  type: 'object',
  validation: (Rule) => Rule.required(),
  options: {
    collapsible: true,
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
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: 'startPoint',
          type: 'simplerColor',
          title: 'The starting point of the gradient',
          initialValue: gradientTopStartPointList[0],

          validation: (Rule) => Rule.required(),
          //   Rule.custom((startPoint, context) => {
          //     console.log(startPoint)
          //     if (context.document.header.typeHeaderPage === 'cover' && startPoint == undefined) {
          //       return 'need startPoint'
          //     } else {
          //       return true
          //     }
          //   }),
          options: {
            enableAlpha: true,
            colorList: gradientTopStartPointList,
          },
        },
        {
          name: 'endPoint',
          type: 'simplerColor',
          title: 'The ending point of the gradient',
          initialValue: gradientTopEndPointList[0],
          validation: (Rule) => Rule.required(),
          // validation: (Rule) =>
          //   Rule.custom((endPoint, context) => {
          //     if (context.document.header.typeHeaderPage === 'cover' && endPoint == undefined) {
          //       return 'need endPoint'
          //     } else {
          //       return true
          //     }
          //   }),
          options: {
            enableAlpha: true,
            colorList: gradientTopEndPointList,
          },
        },
        {
          name: 'endPointEdge',
          type: 'number',
          title: 'The edge of the gradient endpoint',
          initialValue: 50.9,
          validation: (Rule) => Rule.required().min(40).max(65),
          // validation: (Rule) =>
          //   Rule.custom((endPointEdge, context) => {
          //     if (context.document.header.typeHeaderPage === 'cover') {
          //       if (endPointEdge == undefined) {
          //         return 'need endPointEdge (between 65 and 40)'
          //       } else if (endPointEdge > 65) {
          //         return 'less 65'
          //       } else if (endPointEdge < 40) {
          //         return 'more 40'
          //       } else {
          //         return true
          //       }
          //     } else {
          //       return true
          //     }
          //   }),
        },
        {
          name: 'deg',
          type: 'number',
          title: 'Gradient color slope',
          description: 'From the upper left corner (347deg)',
          initialValue: 347,
          validation: (Rule) => Rule.required().min(335).max(355),
          // validation: (Rule) =>
          //   Rule.custom((deg, context) => {
          //     if (context.document.header.typeHeaderPage === 'cover') {
          //       if (deg == undefined) {
          //         return 'need deg (between 355 and 335)'
          //       } else if (deg > 355) {
          //         return 'less 355'
          //       } else if (deg < 335) {
          //         return 'more 335'
          //       } else {
          //         return true
          //       }
          //     } else {
          //       return true
          //     }
          //   }),
        },
        {
          name: 'opacityGradient',
          type: 'number',
          title: 'Opacity Gradient',
          description: 'from 0 to 1 (0% - 100%)',
          initialValue: 0.5,
          validation: (Rule) => Rule.required().min(0).max(1),
          // validation: (Rule) =>
          //   Rule.custom((opacityGradient, context) => {
          //     if (context.document.header.typeHeaderPage === 'cover') {
          //       if (opacityGradient == undefined) {
          //         return 'need opacityGradient (between 1 and 0)'
          //       } else if (opacityGradient > 1) {
          //         return 'less 1'
          //       } else if (opacityGradient < 0) {
          //         return 'more 0'
          //       } else {
          //         return true
          //       }
          //     } else {
          //       return true
          //     }
          //   }),
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
      // validation: (Rule) =>
      //   Rule.custom((gradientBottom, context) => {
      //     if (context.document.header.typeHeaderPage === 'cover' && gradientBottom == undefined) {
      //       return 'need gradientBottom'
      //     } else {
      //       return true
      //     }
      //   }),
      fields: [
        {
          name: 'startPointEdge',
          title: 'The edge of the gradient endpoint',
          type: 'number',
          initialValue: 20,
          validation: (Rule) => Rule.required().min(5).max(25),
          // validation: (Rule) =>
          //   Rule.custom((startPointEdge, context) => {
          //     if (context.document.header.typeHeaderPage === 'cover') {
          //       if (startPointEdge == undefined) {
          //         return 'need startPointEdge (between 25 and 5)'
          //       } else if (startPointEdge > 25) {
          //         return 'less 1'
          //       } else if (startPointEdge < 5) {
          //         return 'more 0'
          //       } else {
          //         return true
          //       }
          //     } else {
          //       return true
          //     }
          //   }),
        },
      ],
    },
  ],
}
