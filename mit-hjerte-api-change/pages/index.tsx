import * as MUI from "@mui/material"
import ModelViewer from "../components/ModelViewer"

export default function Home() {
  return (
    <MUI.Grid sx={{ minHeight: "80vh" }} item xs={12}>
      <MUI.Grid container sx={{ width: "100%" }}>
        <MUI.Grid item xs={12} md={12} flexGrow={1} sx={{ minHeight: "600px" }}>
          <ModelViewer poster="RasktHjerte" model="RasktHjerte" />
        </MUI.Grid>
      </MUI.Grid>
    </MUI.Grid>
  )
}
