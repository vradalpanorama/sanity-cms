export default {
  name: 'skiTracksConditions',
  title: 'Ski Tracks Conditions',
  type: 'object',
  options: {
    columns: 2,
  },
  fields: [
    {
      name: 'skiTrack1',
      title: '1.Holtetjønn',
      type: 'lastGroomedSkiTrackConditions',
    },
    {
      name: 'skiTrack2',
      title: '2.Stemnetten',
      type: 'lastGroomedSkiTrackConditions',
    },
    {
      name: 'skiTrack3',
      title: "3.Skarstøylnetten",
      type: 'lastGroomedSkiTrackConditions',
    },
    {
      name: 'skiTrack4',
      title: "4.Hægefjell",
      type: 'lastGroomedSkiTrackConditions',
    },
  ],
}
