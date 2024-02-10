import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'

/* plugins */
import {media} from 'sanity-plugin-media'
import {simplerColorInput} from 'sanity-plugin-simpler-color-input'
import {iconPicker} from 'sanity-plugin-icon-picker'

/* project fiels */
import {structure} from './structure'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'vradal-panorama-cms',

  projectId: 'p8dy6q7s',
  dataset: 'production',

  plugins: [
    structureTool({structure}),
    visionTool(),
    simplerColorInput({
      defaultColorFormat: 'rgba',
      enableSearch: true,
    }),
    iconPicker(),
    media(),
  ],

  schema: {
    types: schemaTypes,
  },
})
