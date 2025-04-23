import { type WarpCoreConfig } from '@hyperlane-xyz/sdk';
import { zeroAddress } from 'viem';

const ROUTER = '0x308122DDe8146B23e5F70B0FF1F5d322c45d08aC';
const ITT = '0xf3023fcD6307E8883897dF7C86390B886C2A6dfC';

const NETWORK_SEPARATOR = '101010';

export const TOP_MAX = {
  bsesepolia: {
    [ITT]: 100e18,
    [zeroAddress]: 1e16,
  },
  optimismsepolia: {
    [ITT]: 100e18,
    [zeroAddress]: 1e16,
  },
  arbitrumsepolia: {
    [ITT]: 100e18,
    [zeroAddress]: 1e16,
  },
  sepolia: {
    [ITT]: 100e18,
    [zeroAddress]: 1e16,
  },
};

// A list of Warp Route token configs
// These configs will be merged with the warp routes in the configured registry
// The input here is typically the output of the Hyperlane CLI warp deploy command
export const warpRouteConfigs: WarpCoreConfig = {
  tokens: [
    {
      addressOrDenom: ITT,
      chainName: 'optimismsepolia',
      collateralAddressOrDenom: ROUTER,
      connections: [
        {
          token: 'ethereum|arbitrumsepolia|' + ITT,
        },
      ],
      decimals: 18,
      logoURI: '/deployments/warp_routes/ETH/logo.svg',
      name: 'ITT',
      standard: 'Intent',
      symbol: 'ITT',
      protocol: 'ethereum',
    },
    {
      addressOrDenom: ITT,
      chainName: 'arbitrumsepolia',
      collateralAddressOrDenom: ROUTER,
      connections: [
        {
          token: 'ethereum|optimismsepolia|' + ITT,
        },
      ],
      decimals: 18,
      logoURI: '/deployments/warp_routes/ETH/logo.svg',
      name: 'ITT',
      standard: 'Intent',
      symbol: 'ITT',
      protocol: 'ethereum',
    },
    {
      addressOrDenom: zeroAddress,
      chainName: 'optimismsepolia',
      collateralAddressOrDenom: ROUTER,
      connections: [
        {
          token: 'ethereum|arbitrumsepolia|' + zeroAddress,
        },
      ],
      decimals: 18,
      logoURI: '/deployments/warp_routes/ETH/logo.svg',
      name: 'ETH',
      standard: 'IntentNative',
      symbol: 'ETH',
      protocol: 'ethereum',
    },
    {
      addressOrDenom: zeroAddress,
      chainName: 'arbitrumsepolia',
      collateralAddressOrDenom: ROUTER,
      connections: [
        {
          token: 'ethereum|optimismsepolia|' + zeroAddress,
        },
      ],
      decimals: 18,
      logoURI: '/deployments/warp_routes/ETH/logo.svg',
      name: 'ETH',
      standard: 'IntentNative',
      symbol: 'ETH',
      protocol: 'ethereum',
    },
  ],
  // Mainnet Op Arb Base Bera Form
  options: {
    interchainFeeConstants: [
      {
        amount: 3e14,
        origin: ['optimismsepolia', 'basesepolia', 'arbitrumsepolia'].join(NETWORK_SEPARATOR),
        destination: 'sepolia',
        addressOrDenom: zeroAddress,
      },
      {
        amount: 75e16,
        origin: ['optimismsepolia', 'basesepolia', 'arbitrumsepolia'].join(NETWORK_SEPARATOR),
        destination: 'sepolia',
        addressOrDenom: ITT,
      },
      {
        amount: 1e10,
        origin: ['optimismsepolia', 'basesepolia', 'arbitrumsepolia', 'sepolia'].join(
          NETWORK_SEPARATOR,
        ),
        destination: ['optimismsepolia', 'basesepolia', 'arbitrumsepolia'].join(NETWORK_SEPARATOR),
        addressOrDenom: zeroAddress,
      },
      {
        amount: 5e16,
        origin: ['optimismsepolia', 'basesepolia', 'arbitrumsepolia', 'sepolia'].join(
          NETWORK_SEPARATOR,
        ),
        destination: ['optimismsepolia', 'basesepolia', 'arbitrumsepolia'].join(NETWORK_SEPARATOR),
        addressOrDenom: ITT,
      },
    ],
  },
};
