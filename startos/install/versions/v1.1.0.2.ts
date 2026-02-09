import { VersionInfo } from '@start9labs/start-sdk'

export const v_1_1_0_2 = VersionInfo.of({
  version: '1.1.0:2',
  releaseNotes: 'Update to SDK 48',
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
