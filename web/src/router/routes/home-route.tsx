import { lazy } from "react"
import type { AppRoute } from "@/types/route.type"

// Pages
const HomePage = lazy(() => import("../../views/home/pages/home.page.tsx"))

export const HomeRoute: AppRoute[] = [
  {
    path: "/home",
    element: <HomePage />,
    meta: {
      layout: "horizontal",
      publicRoute: true,
    },
  },
]
