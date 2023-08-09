import { BiBookmarks, BiShareAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav className="fixed z-10 bottom-0 right-0 left-0 pb-safe">
      <div className="flex bg-black m-auto rounded-full w-48 justify-between shadow-xl mb-3 lg:mb-6 text-white">
        <Link to={'/profile'} className="p-5">
          <BiShareAlt className="w-6 h-6" />
        </Link>
        <Link to={'/saved'} className="p-5">
          <BiBookmarks className="w-6 h-6" />
        </Link>
      </div>
    </nav>
  )
}