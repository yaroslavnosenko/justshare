import { BiCaptions, BiLinkExternal, BiText } from 'react-icons/bi'

export const LinkForm = () => {
  return (
    <div className="grid gap-4">
      <div className="bg-zinc-900 rounded-full flex items-center pr-8">
        <div className="p-4">
          <BiText className="w-6 h-6" />
        </div>
        <input
          className="bg-transparent block w-full focus:outline-none caret-emerald-400 text-lg self-stretch placeholder-white/60"
          placeholder="Title"
        />
      </div>
      <div className="bg-zinc-900 rounded-full flex items-center pr-8">
        <div className="p-4">
          <BiCaptions className="w-6 h-6" />
        </div>
        <input
          className="bg-transparent block w-full focus:outline-none caret-emerald-400 text-lg self-stretch placeholder-white/60"
          placeholder="Caption"
        />
      </div>
      <div className="bg-zinc-900 rounded-full flex items-center pr-8">
        <div className="p-4">
          <BiLinkExternal className="w-6 h-6" />
        </div>
        <input
          className="bg-transparent block w-full focus:outline-none caret-emerald-400 text-lg self-stretch placeholder-white/60"
          placeholder="URL or phone or email"
        />
      </div>
    </div>
  )
}
