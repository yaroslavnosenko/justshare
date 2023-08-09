import { BiEdit } from 'react-icons/bi'

export const Header = () => {
  return (
    <header>
      <div className="container h-20 flex justify-between items-center">
        <div>
          <p className="font-bold text-3xl">JS</p>
        </div>
        <div>
          <button className="block p-3 -mr-3">
            <BiEdit className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  )
}
