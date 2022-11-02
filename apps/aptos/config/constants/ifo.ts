import { AptosCoin, ChainId, Coin } from '@pancakeswap/aptos-swap-sdk'
import { defaultChain } from '@pancakeswap/awgmi'
import { Ifo } from './types'

// export const ifos: Ifo[] = []

export const ifos: Ifo[] = [
  {
    id: 'test',
    cIFO: true,
    address: '',
    isActive: true,
    name: 'TEST',
    poolUnlimited: {
      saleAmount: '1 TEST',
      raiseAmount: '$1',
      cakeToBurn: '$0',
      distributionRatio: 0.6,
    },
    currency: AptosCoin.onChain(defaultChain.id),
    token: new Coin(
      ChainId.TESTNET,
      '0xb5e31e2dbe3311bb18401d682e0086a3c8b159146d19f66627622cd012495b4b::moon_coin::MoonCoin',
      8,
      'MoonCoin',
    ),
    releaseTime: 0,
    campaignId: '0',
    articleUrl: '',
    tokenOfferingPrice: 0.035,
    version: 3.2,
    twitterUrl: '',
    description: 'Test description',
    vestingTitle: '$TEST - test vesting title.',
  },
]
