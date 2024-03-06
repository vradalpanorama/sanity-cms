export default {
  name: 'menu',
  title: 'Menu',
  type: 'object',
  fields: [
    {
      name: 'mainNavigation',
      title: 'Main Navigation',
      type: 'menuMainNavigation',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'secondNavigation',
      title: 'Second Navigation',
      type: 'menuSecondNavigation',
      validation: (Rule) => Rule.required(),
    },
  ],
  
}
