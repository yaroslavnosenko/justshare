import { LinkForm } from '@/components/app'

export const NewLinkPage = () => {
  return (
    <div className="container">
      <div className="max-w-3xl mx-auto">
        <div className="text-center py-12 lg:pt-24">
          <h1 className="font-bold text-3xl leading-tight">Add Link</h1>
          <p className="opacity-60 pt-2">Here you can see your saved links</p>
        </div>
        <LinkForm />
      </div>
    </div>
  )
}
