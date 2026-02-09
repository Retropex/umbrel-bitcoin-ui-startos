import { setupManifest } from '@start9labs/start-sdk'
import { SDKImageInputSpec } from '@start9labs/start-sdk/base/lib/types/ManifestTypes'

const BUILD = process.env.BUILD || ''

const architectures =
  BUILD === 'x86_64' || BUILD === 'aarch64' ? [BUILD] : ['x86_64', 'aarch64']

export const manifest = setupManifest({
  id: 'umbrel-bitcoin-ui',
  title: 'Umbrel Bitcoin UI',
  license: 'PolyForm Noncommercial License 1.0.0',
  wrapperRepo: 'https://github.com/Retropex/umbrel-bitcoin-ui-startos',
  upstreamRepo: 'https://github.com/Retropex/umbrel-bitcoin.git',
  supportSite: 'https://github.com/Retropex/umbrel-bitcoin/issues',
  marketingSite: 'https://github.com/Retropex/umbrel-bitcoin.git',
  donationUrl: null,
  docsUrl:
    'https://github.com/Retropex/umbrel-bitcoin.git',
  description: {
    short: 'User interface for Bitcoin Knots.',
    long: 'User interface for Bitcoin Knots node.',
  },
  volumes: ['main'],
  images: {
    'umbrel-bitcoin-ui': {
      source: {
        dockerBuild: {
          workdir: './',
          dockerfile: 'Dockerfile',
        },
      },
      arch: architectures,
    } as SDKImageInputSpec,
  },
  hardwareRequirements: {
    arch: architectures,
  },
  alerts: {
    install: null,
    update: null,
    uninstall: null,
    restore: null,
    start: null,
    stop: null,
  },
  dependencies: {},
})
