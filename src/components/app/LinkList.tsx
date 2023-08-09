import { JSLink, LinkListMode } from '@/types'
import { getLinkStyle, prettifyLink } from '@/utils'

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
    <a href="#" className="truncate p-3 rounded-xl border">
      <div className="flex gap-3 items-center">
        <div
          className="text-white rounded-full w-12 h-12 flex items-center justify-center"
          style={{ background: linkStyle.color }}
        >
          {linkStyle.icon}
        </div>
        <div>
          <h2 className="truncate font-bold text-lg leading-tight">{title}</h2>
          <p className="truncate opacity-60">@{subtitle}</p>
        </div>
      </div>
      <p className="truncate mt-3 border-t pt-3">{prettifyLink(url)}</p>
    </a>
  )
}

export const LinkList = ({ links, mode }: LinkListProps) => {
  return (
    <div className="grid gap-4 lg:grid-cols-2 lg:gap-8">
      {links.map((link, index) => (
        <ListItem key={index} link={link} mode={mode} />
      ))}
    </div>
  )
}
