import { JSLink, LinkListMode } from '@/types'
import { getLinkStyle, prettifyLink } from '@/utils'
import { BiCopy } from 'react-icons/bi'

interface LinkListProps {
  links: JSLink[]
  mode: LinkListMode
}

interface LinkItemProps {
  link: JSLink
  mode: LinkListMode
}

const ListItem = ({ link }: LinkItemProps) => {
  const { title, subtitle, url } = link
  const linkStyle = getLinkStyle(url)
  return (
    <a href="#" className="truncate p-4 rounded-xl bg-zinc-900">
      <div className="flex gap-4 items-center">
        <div
          className="rounded-xl w-12 h-12 flex items-center justify-center text-black"
          style={{ background: linkStyle.color }}
        >
          {linkStyle.icon}
        </div>
        <div>
          <h2 className="truncate font-bold text-lg leading-tight">{title}</h2>
          <p className="truncate opacity-60">@{subtitle}</p>
        </div>
      </div>
      <div className="pt-4 flex justify-between items-center">
        <p className="truncate border-black">{prettifyLink(url)}</p>
        <BiCopy className="w-6 h-6" />
      </div>
    </a>
  )
}

export const LinkList = ({ links, mode }: LinkListProps) => {
  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
      {links.map((link, index) => (
        <ListItem key={index} link={link} mode={mode} />
      ))}
    </div>
  )
}
