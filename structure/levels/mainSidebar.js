// import {TbSettings, TbMenuDeep, TbNews, TbDeviceIpadHorizontal} from 'react-icons/tb'
// import {RiHome3Line} from 'react-icons/ri'
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

  ...S.documentTypeListItems().filter((listItem) => ['page'].includes(listItem.getId())),

  // S.divider(),
  // S.listItem()
  //   .title('Settings')
  //   .icon(TbSettings)
  //   .child(S.list().title('Settings alpin.no').items(settingsSidebar(S))),
]

export default mainSidebar
