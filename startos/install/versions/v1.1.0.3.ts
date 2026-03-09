import { VersionInfo } from '@start9labs/start-sdk'

export const v_1_1_0_3 = VersionInfo.of({
  version: '1.1.0:3',
  releaseNotes: 'Update to SDK 58',
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
