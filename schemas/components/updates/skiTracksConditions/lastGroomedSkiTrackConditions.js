export default {
    name: 'lastGroomedSkiTrackConditions',
    title: 'Ski Track Last Groomed',
    type: 'object',
    fields: [
      {
        name: 'lastGroomedDate',
        title: 'Last groomed',
        type: 'date',
        options: {
          dateFormat: 'DD MMM YYYY',
        }
      },
      {
        name: 'isDisplayed',
        title: 'Show',
        type: 'boolean',
        initialValue: true,
      },
    ],
  }
  