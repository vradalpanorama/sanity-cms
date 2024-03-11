import {BsFillStopBtnFill} from 'react-icons/bs'

export default {
  name: 'actionButtonBlock',
  title: 'Action Button Block',
  type: 'object',
  icon: BsFillStopBtnFill,
  validation: (Rule) => Rule.required(),
  fields: [
    {
      name: 'buttonField',
      title: 'Button Field',
      type: 'buttonField',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'EN',
          type: 'string',
        },
        {
          name: 'no',
          title: 'NO',
          type: 'string',
        },
      ],
    },
  ],
  preview: {
    select: {
      buttons: 'buttonField',
      description: 'description',
    },
    prepare({buttons, description}) {
      console.log(buttons)
      const titleBtn = buttons ? buttons.map((button) => {
        return button?.type === 'icon' ? '(icon btn)' : `(${button.nameActionButton.title.en})`
      }): [''];
      return {
        title: titleBtn.join(' '),
        subtitle: `${buttons.length} ${buttons.length === 1 ? 'button' : 'buttons'} ${description ? '| ' + description : ''}`,
        media: BsFillStopBtnFill,
      }
    },
  },
}
