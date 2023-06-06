import * as MUI from "@mui/material"
import { ListPicker, ModelViewer } from "../components"
import FinalizeChoicesModal from "../components/Modal"

const Aareforkalkning = () => {
  return (
    <>
      <MUI.Grid sx={{ minHeight: "80vh" }} elevation={3} item xs={11}>
        <MUI.Grid container>
          <MUI.Grid item xs={12} md={12} flexGrow={1} minHeight={600} maxHeight="80vh">
            <ModelViewer poster="Aareforkalkning" model="Aareforkalkning">
              <MUI.Typography component="p" align="center" variant="h4">
                Åreforkalkning
              </MUI.Typography>
            </ModelViewer>
          </MUI.Grid>
          <FinalizeChoicesModal />
        </MUI.Grid>
      </MUI.Grid>
    </>
  )
}

export default Aareforkalkning
