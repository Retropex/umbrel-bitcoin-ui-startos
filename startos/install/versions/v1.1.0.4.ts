import { VersionInfo } from '@start9labs/start-sdk'

export const v_1_1_0_4 = VersionInfo.of({
  version: '1.1.0:4',
  releaseNotes: 'Update to SDK 61',
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
