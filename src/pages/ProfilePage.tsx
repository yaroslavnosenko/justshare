import { Head } from '@/components/app'
import { LinkList } from '@/components/app'
import { JSLink, LinkListMode } from '@/types'

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
]

export const ProfilePage = () => {
  return (
    <div className="container">
      <div className="max-w-3xl mx-auto">
        <div className="pb-16 pt-24">
          <Head name="Gregory Black" summary="Software Engineer" />
        </div>
        <LinkList links={links} mode={LinkListMode.SHARE} />
      </div>
    </div>
  )
}
