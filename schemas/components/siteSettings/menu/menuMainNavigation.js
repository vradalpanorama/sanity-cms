export default {
  name: 'menuMainNavigation',
  title: 'Main part Navigation',
  type: 'array',
  of: [
    {
      type: 'reference',
      to: [{type: 'page'}, {type: 'section'}],
    },
  ],
}