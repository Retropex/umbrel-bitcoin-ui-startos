# Updating the upstream version

This package builds the UI from [`Retropex/umbrel-bitcoin`](https://github.com/Retropex/umbrel-bitcoin), a fork of Umbrel's Bitcoin app adapted to run against a StartOS-managed Bitcoin Knots node. The source is vendored as a git submodule at [`umbrel-bitcoin/`](./umbrel-bitcoin), pinned to the fork's `startos` branch. "Upstream" here means that fork.

## Determining the upstream version

- **umbrel-bitcoin** ([Retropex/umbrel-bitcoin](https://github.com/Retropex/umbrel-bitcoin), branch `startos`) — check the latest commit or tag on the tracked branch:

  ```sh
  git -C umbrel-bitcoin fetch origin startos
  git -C umbrel-bitcoin log --oneline origin/startos -1
  ```

  The currently vendored commit is whatever the `umbrel-bitcoin` submodule points at (`git submodule status`). The `Dockerfile` builds the backend and UI from that checkout.

## Applying the bump

1. Advance the submodule to the desired upstream commit:

   ```sh
   git -C umbrel-bitcoin fetch origin startos
   git -C umbrel-bitcoin checkout origin/startos   # or a specific tag/commit
   git add umbrel-bitcoin
   ```

2. Rebuild (`make`) and verify the UI starts and reaches the bitcoind dependency.
3. Bump `version` / `releaseNotes` in `startos/versions/current.ts` per [CONTRIBUTING.md](./CONTRIBUTING.md).
