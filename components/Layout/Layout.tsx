import * as MUI from "@mui/material"
import { Header } from "./Header"

const Layout: React.FC<{ children: React.ReactNode | React.ReactNode[] }> = ({
  children
}) => {
  return (
    <MUI.Container sx={{ minHeight: "100vh" }}>
      <Header />
      <MUI.Grid container sx={{ height: "100%" }}>
        {children}
      </MUI.Grid>
    </MUI.Container>
  )
}

export { Layout }
