import {IoSettingsOutline} from 'react-icons/io5'
import {MdMoreVert} from 'react-icons/md'
import {RiHome3Line} from 'react-icons/ri'
import {HiOutlineRefresh} from 'react-icons/hi'

import updatesSidebar from './updatesSidebar'
import otherSidebar from './otherSidebar'
import settingsSidebar from './settingsSidebar'

const mainSidebar = (S) => [
  S.listItem()
    .title('Main Page')
    .icon(RiHome3Line)
    .child(S.document().schemaType('mainPage').documentId('mainPage')),
  S.listItem()
    .title('Updates')
    .icon(HiOutlineRefresh)
    .child(S.list().title('Updates').items(updatesSidebar(S))),
  S.divider(),
  ...S.documentTypeListItems().filter((listItem) => ['section'].includes(listItem.getId())),
  ...S.documentTypeListItems().filter((listItem) => ['page'].includes(listItem.getId())),
  ...S.documentTypeListItems().filter((listItem) => ['modal'].includes(listItem.getId())),
  S.divider(),
  S.listItem()
    .title('Settings')
    .icon(IoSettingsOutline)
    .child(S.list().title('Settings section').items(settingsSidebar(S))),
  S.listItem()
    .title('Other')
    .icon(MdMoreVert)
    .child(S.list().title('Other').items(otherSidebar(S))),
]

export default mainSidebar
