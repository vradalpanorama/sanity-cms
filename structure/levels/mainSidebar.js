import {IoSettingsOutline} from 'react-icons/io5'
// import {TbSettings, TbMenuDeep, TbNews, TbDeviceIpadHorizontal} from 'react-icons/tb'
import { MdOutlineMap } from "react-icons/md";
import {RiHome3Line} from 'react-icons/ri'
// import {LuAlignVerticalSpaceAround} from 'react-icons/lu'

// import pagesSidebar from './pagesSidebar'
// import settingsSidebar from './settingsSidebar'

const mainSidebar = (S) => [
  // S.listItem()
  //   .title('Homepage')
  //   .icon(RiHome3Line)
  //   .child(S.documentList().title('✅ - Selected Homepage').filter('_type == "mainPage"')),
  // S.listItem()
  //   .title('Resort Widget')
  //   .icon(LuAlignVerticalSpaceAround)
  //   .child(S.document().schemaType('resortWidget').documentId('resort-Widget')),
  // S.divider(),
  // ...S.documentTypeListItems().filter((listItem) => ['news'].includes(listItem.getId())),

  // S.listItem()
  //   .title('News · Events')
  //   .icon(TbNews)
  //   .child(
  //     S.documentList()
  //       .title('News · Events')
  //       .filter('_type == "news"')
  //       // .defaultOrdering([{field: 'datePub', direction: 'desc'}]),
  //   ),
  // S.listItem()
  //   .title('Pop-Up · Modal window')
  //   .icon(TbDeviceIpadHorizontal)
  //   .child(
  //     S.documentList()
  //       .title('Pop-Up · Modal window')
  //       .filter('_type == "modal"')
  //       .defaultOrdering([{field: '_updatedAt', direction: 'desc'}]),
  //   ),
  // S.listItem()
  //   .title('Pages')
  //   .icon(TbMenuDeep)
  //   .child(S.list().title('Pages alpin.no').items(pagesSidebar(S))),
  S.listItem()
    .title('Main Page')
    .icon(RiHome3Line)
    .child(S.document().schemaType('mainPage').documentId('mainPage')),
  ...S.documentTypeListItems().filter((listItem) => ['news'].includes(listItem.getId())),
  S.divider(),
  ...S.documentTypeListItems().filter((listItem) => ['modal'].includes(listItem.getId())),
  ...S.documentTypeListItems().filter((listItem) => ['page'].includes(listItem.getId())),
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
