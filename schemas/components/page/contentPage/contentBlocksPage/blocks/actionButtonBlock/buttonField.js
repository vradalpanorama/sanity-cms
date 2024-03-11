export default {
  name: 'buttonField',
  title: 'Button Field',
  type: 'array',
  validation: (Rule) => Rule.required().min(1).max(2),
  of: [
    {
      type: 'actionButton',
    },
  ],
}
