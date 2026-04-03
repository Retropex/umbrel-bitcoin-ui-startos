import { VersionInfo } from '@start9labs/start-sdk'

export const v_1_1_0_8 = VersionInfo.of({
  version: '1.1.0:8',
  releaseNotes: {
    en_US: 'Update to the latest packaging style',
    fr_FR: 'Mise à jour vers le style d\'emballage le plus récent',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
