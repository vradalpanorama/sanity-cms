import mainSidebar from './levels/mainSidebar'

export const structure = (S) =>
  S.list()
    .title('Vrådal Panorama')
    .items(mainSidebar(S))
