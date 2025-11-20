export type RouteMeta = {
  title?: string
  description?: string
  publicRoute?: boolean
  layout?: "blank" | "vertical" | "horizontal"
  restricted?: boolean
}

export type AppRoute = {
  path: string
  element: React.ReactNode
  meta?: RouteMeta
}
