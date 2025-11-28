import { sdk } from './sdk'
import { other } from 'bitcoin-knots/startos/actions/config/other'

export const setDependencies = sdk.setupDependencies(async ({ effects }) => {
  await sdk.action.createTask(effects, 'bitcoind', other, 'critical', {
    input: {
      kind: 'partial',
      value: {
        zmqEnabled: true,
      },
    },
    when: { condition: 'input-not-matches', once: false },
    reason: 'Umbrel UI require ZMQ',
  })

  return {
    bitcoind: {
      kind: 'running',
      versionRange: '>=29.1:2-beta.0',
      healthChecks: ['primary'],
    },
  }
})