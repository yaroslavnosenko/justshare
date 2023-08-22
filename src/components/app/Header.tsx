import { useScrollPosition } from '@/hooks'
import { BiCog } from 'react-icons/bi'
import classNames from 'classnames'

export const Header = () => {
  const scroll = useScrollPosition()
  const headerClass = classNames(
    'pt-safe fixed top-0 right-0 left-0 bg-black z-10 border-zinc-900',
    { 'border-b': scroll > 3 }
  )

  return (
    <header className={headerClass}>
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
