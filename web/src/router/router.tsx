import { lazy } from "react"
import { createBrowserRouter, redirect, type RouteObject } from "react-router-dom"

// Layouts
import BlankLayout from "@/layouts/blank-layout"
import VerticalLayout from "@/layouts/vertical-layout"
import HorizontalLayout from "@/layouts/horizontal-layout"

// Custom Components
import PrivateRoute from "@/components/routes/private-route.tsx"
import PublicRoute from "@/components/routes/public-route.tsx"

// Routes
import routes from "./routes/index.tsx"

// Types
import type { AppRoute, RouteMeta } from "@/types/route.type.ts"

// Utils
import { getHomeRouteForLoggedInUser } from "@/utils/utils.ts"

const LazyApp = lazy(() => import("../App.tsx"))

const resolveLayout = (layout?: string) => {
  switch (layout) {
    case "blank":
      return BlankLayout
    case "vertical":
      return VerticalLayout
    case "horizontal":
      return HorizontalLayout
    default:
      return VerticalLayout
  }
}

const mergeLayoutRoutes = (layout: string, defaultLayout: string): AppRoute[] => {
  const LayoutRoutes: AppRoute[] = []

  routes.forEach((route) => {
    const isMatch =
      (route.meta && route.meta.layout === layout) ||
      route.meta === undefined ||
      (route.meta?.layout === undefined && defaultLayout === layout)

    if (isMatch) {
      let RouteTag: React.ElementType = PrivateRoute

      if (route.meta) {
        RouteTag = route.meta.publicRoute ? PublicRoute : PrivateRoute
      }

      if (route.element) {
        const newRoute = {
          ...route,
          element: <RouteTag routeMeta={route.meta}>{route.element}</RouteTag>,
          handle: {
            ...route.meta,
          } satisfies RouteMeta,
        }

        LayoutRoutes.push(newRoute)
      }
    }
  })

  return LayoutRoutes
}

const getRoutes = () => {
  const defaultLayout = "vertical"
  const layouts = ["vertical", "horizontal", "blank"]

  const AllRoutes: RouteObject[] = []

  layouts.forEach((layoutItem) => {
    const LayoutRoutes = mergeLayoutRoutes(layoutItem, defaultLayout)

    AllRoutes.push({
      Component: resolveLayout(layoutItem) || resolveLayout(defaultLayout),
      children: LayoutRoutes,
    })
  })
  return AllRoutes
}

export const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    loader: () => redirect(getHomeRouteForLoggedInUser()),
  },
  {
    Component: LazyApp,
    children: [...getRoutes()],
  },
])
