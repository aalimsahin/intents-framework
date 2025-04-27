import { AddressZero } from "@ethersproject/constants";

import {
  type Hyperlane7683Metadata,
  Hyperlane7683MetadataSchema,
} from "../types.js";

const metadata: Hyperlane7683Metadata = {
  protocolName: "Hyperlane7683",
  intentSources: [
    // mainnet
    // {
    //   address: "0x5F69f9aeEB44e713fBFBeb136d712b22ce49eb88",
    //   chainName: "ethereum",
    // },
    // testnet
    {
      address: "0x308122DDe8146B23e5F70B0FF1F5d322c45d08aC",
      chainName: "optimismsepolia",
      initialBlock: 26992167,
    },
    {
      address: "0x308122DDe8146B23e5F70B0FF1F5d322c45d08aC",
      chainName: "arbitrumsepolia",
      initialBlock: 147141758,
    },
  ],
  customRules: {
    rules: [
      {
        name: "filterByTokenAndAmount",
        args: {
          "11155420": {
            "0xf3023fcD6307E8883897dF7C86390B886C2A6dfC": BigInt(50e18),
            [AddressZero]: BigInt(5e15),
          },
          "84532": {
            "0x5f94BC7Fb4A2779fef010F96b496cD36A909E818": BigInt(50e18),
            [AddressZero]: BigInt(5e15),
          },
          "421614": {
            "0xf3023fcD6307E8883897dF7C86390B886C2A6dfC": null,
            [AddressZero]: BigInt(5e15),
          },
          "11155111": {
            "0x5f94BC7Fb4A2779fef010F96b496cD36A909E818": BigInt(5e18),
            [AddressZero]: BigInt(5e10),
          },
        },
      },
      {
        name: "intentNotFilled",
      },
    ],
  },
};

Hyperlane7683MetadataSchema.parse(metadata);

export default metadata;
