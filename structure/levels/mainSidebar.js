import {IoSettingsOutline} from 'react-icons/io5'
import {MdOutlineMap} from 'react-icons/md'
import {RiHome3Line} from 'react-icons/ri'

const mainSidebar = (S) => [
  S.listItem()
    .title('Main Page')
    .icon(RiHome3Line)
    .child(S.document().schemaType('mainPage').documentId('mainPage')),
  ...S.documentTypeListItems().filter((listItem) => ['news'].includes(listItem.getId())),
  S.divider(),
  ...S.documentTypeListItems().filter((listItem) => ['section'].includes(listItem.getId())),
  ...S.documentTypeListItems().filter((listItem) => ['page'].includes(listItem.getId())),
  ...S.documentTypeListItems().filter((listItem) => ['modal'].includes(listItem.getId())),
  S.divider(),
  S.listItem()
    .title('Map')
    .icon(MdOutlineMap)
    .child(S.document().schemaType('map').documentId('map')),
  S.listItem()
    .title('Settings')
    .icon(IoSettingsOutline)
    .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
]

export default mainSidebar
