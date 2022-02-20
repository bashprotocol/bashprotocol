import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'BASH PROTOCOL',
  description:
    'The most popular AMM on BSC by user count! Earn CHY through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens on a platform you can trust.',
  image: 'http://bashprotocol.com/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('BASH PROTOCOL')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('BASH PROTOCOL')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('BASH PROTOCOL')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('BASH PROTOCOL')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('BASH PROTOCOL')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('BASH PROTOCOL')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('BASH PROTOCOL')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('BASH PROTOCOL')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('BASH PROTOCOL')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('BASH PROTOCOL')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('BASH PROTOCOL')}`,
      }
    default:
      return null
  }
}
