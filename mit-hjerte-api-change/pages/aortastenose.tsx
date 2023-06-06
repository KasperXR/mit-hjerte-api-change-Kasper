import * as MUI from "@mui/material"
import { ListPicker, ModelViewer, FinalizeChoicesModal } from "../components"

function Aortastenose() {
  return (
    <>
      <MUI.Grid sx={{ minHeight: "80vh" }} elevation={3} item xs={12}>
        <MUI.Grid container>
          <MUI.Grid item xs={11} md={6} flexGrow={1} minHeight={600} maxHeight="80vh">
            <MUI.Box height="100%" width="90%">
              <ModelViewer poster="RasktHjerte" model="RasktHjerte">
                <MUI.Typography component="p" align="center" variant="h4">
                  Normalt hjerte
                </MUI.Typography>
              </ModelViewer>
            </MUI.Box>
          </MUI.Grid>
          <MUI.Grid item xs={11} md={6} flexGrow={1} minHeight={600} maxHeight="80vh">
            <ModelViewer poster="Aortastenose" model="Aortastenose">
              <MUI.Typography component="p" align="center" variant="h4">
                Aortastenose
              </MUI.Typography>
            </ModelViewer>
          </MUI.Grid>

          <FinalizeChoicesModal />
        </MUI.Grid>
      </MUI.Grid>
    </>
  )
}

export default Aortastenose
