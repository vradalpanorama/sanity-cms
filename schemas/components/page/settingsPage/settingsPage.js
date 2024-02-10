export default {
  name: 'settingsPage',
  title: 'Settings Page',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    {name: 'namePage', title: 'Name Page', type: 'namePage'},
    {name: 'pathname', title: 'Pathname', type: 'pathnamePage'},
    {
      name: 'preview',
      title: 'Preview Page',
      type: 'previewPage',
    },
    {
      name: 'seoAndSocial',
      title: 'SEO & Social',
      type: 'seoAndSocialPageInfo',
    },
  ],
}
