import { VersionInfo } from '@start9labs/start-sdk'

export const v_1_1_0_6 = VersionInfo.of({
  version: '1.1.0:6',
  releaseNotes: 'Update to SDK 65',
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
