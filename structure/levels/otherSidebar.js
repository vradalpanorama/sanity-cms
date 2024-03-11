const otherSidebar = (S) => [
    ...S.documentTypeListItems().filter((listItem) => ['externalLink'].includes(listItem.getId())),
]

export default otherSidebar