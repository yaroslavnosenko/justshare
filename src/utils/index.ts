import { LinkStyle } from '@/types'
import { LinkConfig } from '@/config'

export const prettifyLink = (url: string) => {
  return url
    .replace('https://www.', '')
    .replace('http://www.', '')
    .replace('https://', '')
    .replace('http://', '')
}

export const getLinkStyle = (url: string): LinkStyle => {
  if (url.includes('fb.com')) {
    return LinkConfig.find((config) => config.provider === 'facebook')!
  }
  if (url.includes('linkedin.com')) {
    return LinkConfig.find((config) => config.provider === 'linkedin')!
  }
  if (url.includes('instagram.com')) {
    return LinkConfig.find((config) => config.provider === 'instagram')!
  }
  if (url.includes('t.me')) {
    return LinkConfig.find((config) => config.provider === 'telegram')!
  }
  return LinkConfig.find((config) => config.provider === 'unknown')!
}
