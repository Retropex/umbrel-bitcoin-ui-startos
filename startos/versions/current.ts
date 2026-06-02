import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.1.0:9',
  releaseNotes: {
    en_US: 'Update to the latest packaging template and start-sdk 1.5.3.',
    es_ES:
      'Actualización a la última plantilla de empaquetado y start-sdk 1.5.3.',
    de_DE:
      'Aktualisierung auf die neueste Packaging-Vorlage und start-sdk 1.5.3.',
    pl_PL: 'Aktualizacja do najnowszego szablonu pakowania i start-sdk 1.5.3.',
    fr_FR:
      "Mise à jour vers le dernier modèle d'empaquetage et start-sdk 1.5.3.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
