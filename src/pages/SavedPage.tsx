import { BiSearch, BiX } from 'react-icons/bi'

export const SavedPage = () => {
  return (
    <div className="container">
      <div className="max-w-3xl mx-auto">
        <div className="text-center py-12 lg:pt-24">
          <h1 className="font-bold text-3xl leading-tight">Saved</h1>
          <p className="opacity-60 pt-2">Here you can see your saved links</p>
        </div>
        <div className="bg-zinc-900 rounded-full flex items-center">
          <div className="p-4">
            <BiSearch className="w-6 h-6" />
          </div>
          <input
            className="bg-transparent block w-full focus:outline-none caret-emerald-400 text-lg self-stretch placeholder-white/60"
            placeholder="Search"
          />
          <div className="p-2 bg-emerald-400 rounded-full mx-2 ml-4">
            <BiX className="w-6 h-6 text-black" />
          </div>
        </div>
      </div>
    </div>
  )
}
