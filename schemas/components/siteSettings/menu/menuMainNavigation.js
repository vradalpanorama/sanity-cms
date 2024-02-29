export default {
  name: 'menuMainNavigation',
  title: 'Main Navigation',
  type: 'array',
  of: [
    {
      type: 'menuSectionNavigation',
    },
    {
      type: 'reference',
      to: [{type: 'page'}],
    },
  ],
}
