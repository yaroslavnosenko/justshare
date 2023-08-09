import { Head } from '@/components/app'
import { LinkList } from '@/components/app'
import { JSLink, LinkListMode } from '@/types'
import { BiPlus, BiMove } from 'react-icons/bi'

const links: JSLink[] = [
  {
    title: 'Yaroslav Nosenko',
    subtitle: 'Software Engineer',
    url: 'https://www.linkedin.com/in/john-doe/',
  },
  {
    title: 'John Doe',
    subtitle: 'Meta',
    url: 'https://www.linkedin.com/in/john-doe/',
  },
  {
    title: 'John Doe',
    subtitle: 'Meta',
    url: 'https://www.linkedin.com/in/john-doe/',
  },
  {
    title: 'John Doe',
    subtitle: 'Meta',
    url: 'https://www.linkedin.com/in/john-doe/',
  },
  {
    title: 'John Doe',
    subtitle: 'Meta',
    url: 'https://www.linkedin.com/in/john-doe/',
  },
]

export const ProfilePage = () => {
  return (
    <div className="container">
      <div className="max-w-3xl mx-auto">
        <div className="pb-12 pt-24">
          <Head name="Gregory Black" summary="Software Engineer" />
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
