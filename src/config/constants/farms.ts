import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'BPT',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0xe949333f205015dfc676b2d7ee9b25a6bea5c049', /* 0x3e76bd1edb5f6d981dd14d9d2ab711f0c2a0a6a0 */
    },
    token: tokens.bpt,
    quoteToken: tokens.busd,
  },
  {
    pid: 1,
    lpSymbol: 'BPT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xa791F55A935cC2de2361B873eD31Fee72764C28f',
    },
    token: tokens.bpt,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 3,
    lpSymbol: 'BPT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xe949333f205015dfc676b2d7ee9b25a6bea5c049',
    },
    token: tokens.bpt,
    quoteToken: tokens.busd,
  },
  {
    pid: 4,
    lpSymbol: 'wBNB',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', /* 0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c */
    },
    token: tokens.wbnb,
    quoteToken: tokens.busd,
  },
  {
    pid: 5,
    lpSymbol: 'BUSD',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    },
    token: tokens.busd,
    quoteToken: tokens.busd,
  },
  // {
  //   pid: 6,
  //   lpSymbol: 'IBPT-CAKE LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x15f5Aa0D4CB303c93BEedbdaa80694Ed21482418',
  //   },
  //   token: tokens.ibull,
  //   quoteToken: tokens.cake,
  // },
  {
    pid: 2,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x58f876857a02d6762e0101bb5c46a8c1ed44dc16',
    },
    quoteToken: tokens.wbnb,
    token: tokens.busd,
  },
]

export default farms
