import { MenuEntry, menuStatus } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: t('Swap'),
    icon: 'TradeIcon',
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
      // {
      //   label: t('LP Migration'),
      //   href: 'https://v1exchange.pancakeswap.finance/#/migrate',
      // },
    ],
  },
  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: t('Bash gold'),
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: t('Juicy (soon)'),
  //   icon: 'PredictionsIcon',
  //   href: '/juicy',
  // },
  // {
  //   label: t('IGO (soon)'),
  //   icon: 'GroupsIcon',
  //   href: '/igo',
  // },
  // {
  //   label: t('Lottery (soon)'),
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: t('Casino (soon)'),
  //   icon: 'NftIcon',
  //   href: '/casino',
  // },
  // {
  //   label: t('NFT Store(soon)'),
  //   icon: 'TeamBattleIcon',
  //   href: '/nft',
  // },
  
  // {
  //   label: t('Merch (soon)'),
  //   icon: 'InfoIcon',
  //   href: '/merch',
  // },
  {
    label: t('LaunchPad'),
    icon: 'IfoIcon',
    href: '/launchpad',
  },
  {
    label: t('NFT'),
    icon: 'TeamBattleIcon',
    href: '/NFT',
    status: menuStatus.SOON
  },
  {
    label: t('Stats'),
    icon: 'NftIcon',
    href: '/Stats',
    status: menuStatus.SOON
  },
  {
    label: t('Info'),
    icon: 'InfoIcon',
    href: '/Info',
    status: menuStatus.SOON
  },
  {
    label: t('More'),
    icon: 'MoreIcon',
    items: [
      // {
      //   label: t('Contact'),
      //   href: 'https://docs.pancakeswap.finance/contact-us',
      // },
      // {
      //   label: t('Voting'),
      //   href: '/voting',
      // },
      {
        label: t('Github'),
        href: 'https://github.com/bashprotocol',
      },
      {
        label: t('Docs'),
        href: 'https://bashprotocol.com/doc.pdf',
      },
      {
        label: t('Audit'),
        href: '#',
      },
      // {
      //   label: t('Merch'),
      //   href: 'https://pancakeswap.creator-spring.com/',
      // },
    ],
  },
  
]

export default config
