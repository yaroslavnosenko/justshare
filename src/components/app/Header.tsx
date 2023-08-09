import { BiCog } from 'react-icons/bi'

export const Header = () => {
  return (
    <header className="pt-safe fixed top-0 right-0 left-0 bg-black/30 backdrop-blur-2xl z-10">
      <div className="container h-20 flex justify-between items-center">
        <div>
          <p className="font-bold text-3xl">JS</p>
        </div>
        <div>
          <button className="block p-3 -mr-3">
            <BiCog className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  )
}
