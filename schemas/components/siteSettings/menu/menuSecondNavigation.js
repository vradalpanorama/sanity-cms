export default {
  name: 'menuSecondNavigation',
  title: 'Second part Navigation',
  type: 'reference',
  validation: (Rule) => Rule.required(),
  to: [{type: 'page'}, {type: 'section'}, {type: 'modal'}],
}
