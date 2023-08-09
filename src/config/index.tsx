import { LinkStyle } from '@/types'
import {
  BiLinkExternal,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoFacebook,
  BiLogoTelegram,
} from 'react-icons/bi'

export const LinkConfig: LinkStyle[] = [
  {
    provider: 'facebook',
    color: '#60a5fa',
    icon: <BiLogoFacebook className="w-6 h-6" />,
  },
  {
    provider: 'linkedin',
    color: '#38bdf8',
    icon: <BiLogoLinkedin className="w-6 h-6" />,
  },
  {
    provider: 'instagram',
    color: '#E4405F',
    icon: <BiLogoInstagram className="w-8 h-8" />,
  },
  {
    provider: 'telegram',
    color: '#37afe2',
    icon: <BiLogoTelegram className="w-6 h-6" />,
  },
  {
    provider: 'unknown',
    color: '#34d399',
    icon: <BiLinkExternal className="w-6 h-6" />,
  },
]
