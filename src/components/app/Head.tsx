interface HeadProps {
  name: string
  summary: string
}

export const Head = ({ name, summary }: HeadProps) => {
  return (
    <div className="text-center">
      <h1 className="font-bold text-3xl leading-tight">{name}</h1>
      <p className="opacity-60 pt-2">@{summary}</p>
    </div>
  )
}
