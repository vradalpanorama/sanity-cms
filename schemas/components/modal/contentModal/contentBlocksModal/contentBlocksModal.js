const textEditorStyles = [
  {title: 'Paragraph', value: 'normal'},
  {title: 'Heading 2', value: 'h2'},
  {title: 'Heading 5', value: 'h5'},
  {title: 'Quote', value: 'blockquote'},
]

const textEditorDecoratos = [
  {title: 'Strong', value: 'strong'},
  {title: 'Emphasis', value: 'em'},
]

export default {
  name: 'contentBlocksModal',
  title: 'Content Modal Block',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false,
  },
  validation: (Rule) => Rule.required(),
  fields: [
    {
      name: 'main',
      title: 'Main Part',
      type: 'object',
      options: {
        collapsible: false,
      },
      fields: [
        {
          name: 'body',
          type: 'array',
          title: 'modal part',
          of: [
            {
              type: 'block',
              styles: textEditorStyles,
              marks: {
                decorators: textEditorDecoratos,
              },
            },
            // {
            //   type: 'twoCellsBlock',
            // },
            // {
            //   type: 'imageBlock',
            // },
            // {
            //   type: 'bannerBlock',
            // },
          ],
        },
      ],
    },
    {
      name: 'bottom',
      title: 'Bottom Part',
      type: 'object',
      options: {
        collapsible: false,
      },
      fields: [
        {
          name: 'body',
          type: 'array',
          title: 'modal part',
          of: [
            {
              type: 'block',
              styles: textEditorStyles,
              marks: {
                decorators: textEditorDecoratos,
              },
            },
            // {
            //   type: 'twoCellsBlock',
            // },
            // {
            //   type: 'imageBlock',
            // },
            // {
            //   type: 'bannerBlock',
            // },
          ],
        },
      ],
    },
  ],
}
