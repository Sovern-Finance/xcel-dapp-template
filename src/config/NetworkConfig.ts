import { BSCMainnetConfig } from './BSCMainnetConfig';
import { MappingState } from '@/store/standard/MappingState';
import { EthNetworkState } from '../store/lib/EthNetworkState';
import { ETHKovanConfig } from './ETHKovanConfig';
import { ETHMainnetConfig } from './ETHMainnetConfig';
import { BSCTestnetConfig } from './BSCTestnetConfig';
import { IotexMainnetConfig } from './IotexMainnetConfig';
import { IotexTestnetConfig } from './IotexTestnetConfig';
import { PolygonMainnetConfig } from './PolygonMainnetConfig';
import { FTMMainnetConfig } from './FTMMainnetConfig';
import { AVAXMainnetConfig } from './AVAXMainnetConfig';
import { allowChains } from '../lib/web3-react';

const EthChains = [BSCMainnetConfig, BSCTestnetConfig, ETHMainnetConfig, ETHKovanConfig, IotexTestnetConfig, IotexMainnetConfig, PolygonMainnetConfig, FTMMainnetConfig, AVAXMainnetConfig];

export const EthNetworkConfig = new EthNetworkState({
  allowChains,
  info: {
    token: {
      tokenExample: '0x000000000000000000000000000000000000000'
    }
  },
  chain: new MappingState({
    currentId: ETHMainnetConfig.chainId,
    map: EthChains.reduce((p, c) => {
      p[c.chainId] = c;
      return p;
    }, {})
  })
});
