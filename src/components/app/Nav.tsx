import { BiBookmarks, BiHome } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav className="fixed z-10 bottom-4 lg:bottom-8 right-0 left-0 pb-safe">
      <div className="flex bg-emerald-400 m-auto rounded-full w-36 justify-between shadow-xl text-black shadow-emerald-400/10">
        <Link to={'/me'} className="p-4">
          <BiHome className="w-6 h-6" />
        </Link>
        <Link to={'/saved'} className="p-4">
          <BiBookmarks className="w-6 h-6" />
        </Link>
      </div>
    </nav>
  )
}
