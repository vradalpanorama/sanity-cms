import {MdOutlineDynamicFeed} from 'react-icons/md'
import {FaPersonSkiingNordic} from 'react-icons/fa6'

const updatesSidebar = (S) => [
  S.listItem()
    .title('News Feed')
    .icon(MdOutlineDynamicFeed)
    .child(S.document().schemaType('newsFeed').documentId('newsFeed')),
  ...S.documentTypeListItems().filter((listItem) => ['news'].includes(listItem.getId())),
  S.divider(),
  S.listItem()
    .title('Ski Tracks Conditions')
    .icon(FaPersonSkiingNordic)
    .child(S.document().schemaType('skiTracksConditions').documentId('skiTracksConditions')),
]

export default updatesSidebar
