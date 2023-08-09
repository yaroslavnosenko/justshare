export interface LinkStyle {
  provider: string
  icon: JSX.Element
  color: string
}

export enum LinkListMode {
  SHARE,
  EDIT,
  SAVED,
}

export interface JSLink {
  title: string
  subtitle: string
  url: string
  order?: number
}
