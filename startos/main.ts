import { sdk } from './sdk'
import { uiPort } from './utils'
import { manifest } from 'bitcoin-knots/startos/manifest'

export const main = sdk.setupMain(async ({ effects, started }) => {
  console.info('Starting Umbrel UI.')

  return sdk.Daemons.of(effects, started).addDaemon('primary', {
    subcontainer: await sdk.SubContainer.of(
      effects,
      { imageId: 'umbrel-bitcoin-ui' },
      sdk.Mounts.of().mountVolume({
        volumeId: 'main',
        subpath: null,
        mountpoint: '/root',
        readonly: false,
      }).mountDependency<typeof manifest>({
            dependencyId: 'bitcoind',
            volumeId: 'main',
            subpath: null,
            mountpoint: '/mnt/knots',
            readonly: true,
          }),
      'umbrel-bitcoin-ui-sub',
    ),
    exec: { 
      command: [
          'env',
          'BITCOIND_EXTERNAL_MODE=true',
          'ZMQ_HASHTX_PORT=28333',
          'ZMQ_HASHBLOCK_PORT=28332',
          'BITCOIND_IP=bitcoind.startos',
          'RPC_COOKIE=/mnt/knots/.cookie',
          'node',
          '/app/dist/server.js',
        ] 
      },
    ready: {
      display: 'Web Interface',
      fn: () =>
        sdk.healthCheck.checkPortListening(effects, uiPort, {
          successMessage: 'The web interface is ready',
          errorMessage: 'The web interface is not ready',
        }),
    },
    requires: [],
  })
})
