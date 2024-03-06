import {MdSensorWindow} from 'react-icons/md'

export default {
  name: 'modal',
  title: 'Modal windows',
  type: 'document',
  icon: MdSensorWindow,
  fields: [
    {
      name: 'settings',
      title: 'Settings',
      type: 'settingsModal',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Content',
      type: 'contentModal',
      validation: (Rule) => Rule.required(),
    },
  ],
    preview: {
      select: {
        title: 'settings.nameModal.en',
        query: 'settings.queryParameter.current',
      },
      prepare({title, query}) {
        return {
          title,
          subtitle: `...?modal=${query}`,
        }
      },
    },
}
