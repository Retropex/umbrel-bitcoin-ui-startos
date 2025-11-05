#!/bin/sh

export BITCOIND_EXTERNAL_MODE=true
export BITCOIND_IP=bitcoind.embassy
export RPC_USER=$(yq -e -r '.rpcuser' "/root/start9/config.yaml")
export RPC_PASS=$(yq -e -r '.rpcpassword' "/root/start9/config.yaml")

printf "\n\n [i] Starting Umbrel UI ...\n\n"
exec node /app/dist/server.js
