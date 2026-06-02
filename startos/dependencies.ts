import { autoconfig } from 'bitcoin-knots-startos/startos/actions/config/autoconfig'
import { i18n } from './i18n'
import { sdk } from './sdk'

export const setDependencies = sdk.setupDependencies(async ({ effects }) => {
  await sdk.action.createTask(effects, 'bitcoind', autoconfig, 'critical', {
    input: {
      kind: 'partial',
      value: {
        zmqEnabled: true,
      },
    },
    when: { condition: 'input-not-matches', once: false },
    reason: i18n(
      'Umbrel Bitcoin UI requires ZMQ for live block and transaction updates.',
    ),
  })

  return {
    bitcoind: {
      kind: 'running',
      versionRange: '>=28.3',
      healthChecks: ['bitcoind'],
    },
  }
})
