import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Doodaswap',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by PancakeSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('Doodaswap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('Doodaswap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('Doodaswap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('Doodaswap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('Doodaswap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('Doodaswap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('Doodaswap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('Doodaswap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('Doodaswap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('Doodaswap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('Doodaswap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('Doodaswap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('Doodaswap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('Doodaswap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('Doodaswap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('Doodaswap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('Doodaswap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('Doodaswap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('Doodaswap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('Doodaswap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('Doodaswap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('Doodaswap Info & Analytics')}`,
        description: 'View statistics for Doodaswap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('Doodaswap Info & Analytics')}`,
        description: 'View statistics for Doodaswap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Pools')} | ${t('Doodaswap Info & Analytics')}`,
        description: 'View statistics for Doodaswap exchanges.',
      }
    default:
      return null
  }
}
