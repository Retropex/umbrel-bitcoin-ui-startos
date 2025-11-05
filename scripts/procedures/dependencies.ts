import { matches, types as T } from "../deps.ts";

const { shape, boolean } = matches;

const matchOldBitcoindConfig = shape({
  rpc: shape({
    enable: boolean
  }),
  "zmq-enabled": boolean
})

export const dependencies: T.ExpectedExports.dependencies = {
  bitcoind: {
    // deno-lint-ignore require-await
    async check(_effects, configInput) {
      if (matchOldBitcoindConfig.test(configInput) && !configInput.rpc.enable) {
        return { error: "Must have RPC enabled" };
      } else if (matchOldBitcoindConfig.test(configInput) && (!configInput['zmq-enabled'])) {
        return { error: "ZMQ must be enabled" };
      } else if (matchOldBitcoindConfig.test(configInput)) {
        return { result: null }
      }
      return { result: null };
    },
    // deno-lint-ignore require-await
    async autoConfigure(_effects, configInput) {
      if (matchOldBitcoindConfig.test(configInput)) {
        configInput.rpc.enable = true;
        configInput["zmq-enabled"] = true;
        return { result: configInput }
      } else {
        return { result: configInput };
      }
    },
  },
};
