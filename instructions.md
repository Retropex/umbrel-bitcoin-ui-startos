# Umbrel Bitcoin UI

Umbrel Bitcoin UI gives your StartOS Bitcoin node the familiar Umbrel-style dashboard — sync status, peers, fees, and node settings — in a clean web interface.

## Before you start

This is a **front end only**. It does not run a Bitcoin node itself; it connects to one already installed on your server. Before starting Umbrel Bitcoin UI you must have a Bitcoin node (**Bitcoin Knots** or **Bitcoin Core**) installed and running.

StartOS handles the wiring for you:

- It marks your Bitcoin node as a required dependency and won't let the UI run without one.
- It automatically enables **ZMQ** on that node — the UI needs it for live block and transaction updates. You may see your Bitcoin node restart once when this setting is applied.
- It connects over the local network using the node's RPC cookie — there's no password to copy and nothing to configure.

## Using it

1. Install and start a Bitcoin node if you haven't already, then install **Umbrel Bitcoin UI**.
2. Start the service. Once your Bitcoin node is reachable, the **Web Interface** health check turns green.
3. Open the service's **Dashboard** tab and click the **Web UI** interface to open the dashboard in your browser.

There is no setup wizard, admin password, or configuration to fill in — the UI is ready as soon as it can reach your node.

## Documentation

- [Upstream project](https://github.com/Retropex/umbrel-bitcoin) — the source for this UI.

## Limitations

- The UI reflects whatever your Bitcoin node reports; node-level settings (network, pruning, etc.) are managed in the Bitcoin node's own config, not here.
- It connects only to the Bitcoin node on this StartOS server — it cannot point at an external/remote node.
