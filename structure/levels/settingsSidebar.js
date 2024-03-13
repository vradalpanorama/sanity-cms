import {IoSettings} from 'react-icons/io5'
import {BsWindowDesktop} from 'react-icons/bs'

const settingsSidebar = (S) => [
  S.listItem()
    .title('Site Settings')
    .icon(IoSettings)
    .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
  //   S.divider(),
  S.listItem()
    .title('Resort Widget Settings')
    .icon(BsWindowDesktop)
    .child(S.document().schemaType('resortWidgetSettings').documentId('resortWidgetSettings')),
]

export default settingsSidebar
