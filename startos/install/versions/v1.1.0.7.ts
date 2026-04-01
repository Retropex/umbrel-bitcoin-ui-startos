import { VersionInfo } from '@start9labs/start-sdk'

export const v_1_1_0_7 = VersionInfo.of({
  version: '1.1.0:7',
  releaseNotes: 'Update to SDK 1.0.0',
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
