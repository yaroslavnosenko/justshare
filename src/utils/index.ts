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
  console.log(url)
  return LinkConfig[0]
}
