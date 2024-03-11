import { MdAppSettingsAlt } from "react-icons/md";
import {BsWindowDesktop} from 'react-icons/bs'

const settingsSidebar = (S) => [
  S.listItem()
    .title('Site Settings')
    .icon(MdAppSettingsAlt)
    .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
//   S.divider(),
  S.listItem()
    .title('Resort Widget Settings')
    .icon(BsWindowDesktop)
    .child(S.document().schemaType('resortWidgetSettings').documentId('resortWidgetSettings')),
]

export default settingsSidebar
