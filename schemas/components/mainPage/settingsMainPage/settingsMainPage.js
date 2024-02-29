export default {
  name: 'settingsMainPage',
  title: 'Settings Main Page',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    {
      name: 'newsSettings',
      title: 'News Settings',
      type: 'newsSettings',
    },
    {
      name: 'weatherWidget',
      title: 'Weather Widget',
      type: 'weatherWidgetSettings',
    },
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
