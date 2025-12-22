import { VersionInfo } from '@start9labs/start-sdk'

export const v_1_1_0_1 = VersionInfo.of({
  version: '1.1.0:1',
  releaseNotes: 'Umbrel UI for StartOS 0.4.0',
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
