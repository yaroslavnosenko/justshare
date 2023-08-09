import { LinkList } from '@/components/app'
import { JSLink, LinkListMode } from '@/types'
import { BiPlus, BiMove } from 'react-icons/bi'

const links: JSLink[] = [
  {
    title: 'Yaroslav Nosenko',
    subtitle: 'Software Engineer',
    url: 'https://www.linkedin.com/in/john-doe',
  },
  {
    title: 'John Doe',
    subtitle: 'Meta',
    url: 'https://www.instagram.com/john-doe',
  },
  {
    title: 'John Doe',
    subtitle: 'Meta',
    url: 'https://www.fb.com/john-doe',
  },
  {
    title: 'Some Link',
    subtitle: 'Website',
    url: 'https://www.somelink.com/other',
  },
  {
    title: 'Yaroslav Nosenko',
    subtitle: 'Telegram',
    url: 'https://www.t.me/tel',
  },
]

export const MePage = () => {
  return (
    <div className="container">
      <div className="max-w-3xl mx-auto">
        <div className="text-center py-12 lg:pt-24">
          <h1 className="font-bold text-3xl leading-tight">Gregory Black</h1>
          <p className="opacity-60 pt-2">@Software Engineer</p>
        </div>
        <div className="flex justify-between">
          <button className="flex gap-2 opacity-60 h-16 items-center">
            <BiMove className="w-6 h-6" />
            <span>Reorder</span>
          </button>
          <button className="flex gap-2 text-emerald-400 h-16 items-center">
            <BiPlus className="w-6 h-6" />
            <span>Add Link</span>
          </button>
        </div>
        <LinkList links={links} mode={LinkListMode.SHARE} />
      </div>
    </div>
  )
}
