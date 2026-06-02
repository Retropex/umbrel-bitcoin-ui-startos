import { setupManifest } from '@start9labs/start-sdk'
import { long, short } from './i18n'

export const manifest = setupManifest({
  id: 'umbrel-bitcoin-ui',
  title: 'Umbrel Bitcoin UI',
  license: 'PolyForm Noncommercial License 1.0.0',
  packageRepo: 'https://github.com/Retropex/umbrel-bitcoin-ui-startos',
  upstreamRepo: 'https://github.com/Retropex/umbrel-bitcoin.git',
  marketingUrl: 'https://github.com/Retropex/umbrel-bitcoin.git',
  donationUrl: null,
  docsUrls: ['https://github.com/Retropex/umbrel-bitcoin.git'],
  description: { short, long },
  volumes: ['main'],
  images: {
    'umbrel-bitcoin-ui': {
      source: {
        dockerBuild: {
          workdir: './',
          dockerfile: 'Dockerfile',
        },
      },
      arch: ['x86_64', 'aarch64'],
    },
  },
  dependencies: {},
})
