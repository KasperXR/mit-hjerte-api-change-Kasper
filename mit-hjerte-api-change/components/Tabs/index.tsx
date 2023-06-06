import { EmotionJSX } from "@emotion/react/types/jsx-namespace"
import * as MUI from "@mui/material"
import { useRouter } from "next/router"
import shallow from "zustand/shallow"
import { useStore } from "../../util/store"
import theme from "../../util/theme"

const PageTabs = () => {
  const router = useRouter()
  const { pathname } = router

  const matchPaths = (path: string) => {
    const routerPath =
      pathname !== "/"
        ? decodeURIComponent(pathname.slice(1, pathname.length))
        : pathname

    if (path === routerPath) return path

    // A hack to get the tabs to work with the home page
    if (routerPath === "/" && path === "forside") return "/"
  }

  const topicIds = useStore(
    (state) => state.allTopics.map((t) => t.id.toLowerCase()),
    shallow
  )

  const isMobile = MUI.useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <MUI.Tabs
      value={topicIds.findIndex(matchPaths)}
      centered={!isMobile}
      variant={isMobile ? "scrollable" : "standard"}
      scrollButtons={"auto"}
      allowScrollButtonsMobile
    >
      {topicIds.map((name, index) => {
        return (
          <MUI.Tab
            tabIndex={index}
            onClick={() => router.push(name === "forside" ? "/" : name)}
            key={`${name} tab`}
            label={name}
            // disabled={index > 1}
            value={index}
          />
        )
      })}
    </MUI.Tabs>
  )
}

export default PageTabs
