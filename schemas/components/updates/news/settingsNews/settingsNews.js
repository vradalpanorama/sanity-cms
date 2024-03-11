import {slugify} from 'transliteration'

export default {
  name: 'settingsNews',
  type: 'object',
  title: 'Settings News',
  fields: [
    {
      name: 'datePub',
      type: 'datetime',
      title: 'Date of publication of the news / Date of the event',
      description:
        'News and events are ranked on the main page depending on the date, the latest news or event will be a promo',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'isPrivate',
      type: 'boolean',
      title: 'Is the private news?',
      description: 'If yes, it will be available only by link(🔒🔒🔒).',
      initialValue: false,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'typeNews',
      type: 'string',
      title: 'Type',
      options: {
        list: [
          {title: '📰 News', value: 'news'},
          {title: '🗓 Event', value: 'event'},
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'seoAndSocial',
      title: 'SEO And Social',
      type: 'seoAndSocialPageInfo',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'News slug',
      description:
        'Slug is the part of the URL that identifies the page using human-readable keywords. Enter English title to generate news slug or fill in new slug manually',
      validation: (Rule) =>
        Rule.required().error(
          'Enter English title to generate news slug or fill in new slug manually',
        ),
      options: {
        source: (doc) =>
          `${doc?.settings?.datePub.split('T')[0]}-${doc?.settings?.seoAndSocial.title.en}`,
        maxLength: 200,
        slugify: (input) => {
          const slug = slugify(input.replace(/\./g, ' '))
          console.log(slug)
          return slug
        },
      },
    },
  ],
}
