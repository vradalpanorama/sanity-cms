import {IoSettingsOutline} from 'react-icons/io5'

export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: IoSettingsOutline,
  fields: [
    {
      name: 'menuSettings',
      title: 'Menu Settings',
      type: 'menu',
    },
    {
      name: 'footerSettings',
      title: 'Footer Settings',
      type: 'footer',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Site settings',
      }
    },
  },
}
