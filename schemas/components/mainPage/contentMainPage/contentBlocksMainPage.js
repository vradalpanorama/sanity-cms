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
  name: 'contentBlocksMainPage',
  title: 'Content Blocks',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false,
  },
  validation: (Rule) => Rule.required(),
  fields: [
    {
      name: 'body',
      type: 'array',
      title: 'Body',
      of: [
        {
          type: 'block',
          styles: textEditorStyles,
          marks: {
            decorators: textEditorDecoratos,
          },
        },
        {
          type: 'previewPageBlock',
        },
        {
          type: 'twoCellsBlock',
        },
        {
          type: 'threeCellsBlock',
        },
        {
          type: 'imageBlock',
        },
        {
          type: 'bannerBlock',
        },
        {
          type: 'actionButtonBlock',
        },
        {
          type: 'resortWidgetMainPageBlock',
        },
        {
          type: 'newsFeedMainPageBlock',
        },
      ],
    },
  ],
}
