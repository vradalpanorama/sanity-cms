export default {
  name: 'menuMainNavigation',
  title: 'Main part Navigation',
  type: 'array',
  validation: (Rule) => Rule.required().min(1).max(5),
  of: [
    {
      type: 'reference',
      to: [{type: 'page'}, {type: 'section'} , {type: 'modal'}],
    },
  ],
}