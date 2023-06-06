import * as MUI from "@mui/material"

import FinalizeChoicesModal from "../components/Modal"
import { ListPicker, ModelViewer } from "../components"

function AtrieFlimren() {
  return (
    <>
      <MUI.Grid sx={{ minHeight: "700px" }} alignItems="center" alignContent="center" container item xs={12}>
        <MUI.Grid container item>
          <MUI.Grid item xs={12} md={6} flexGrow={1} minHeight={600} p={6}>
            <MUI.Typography component="p" align="center" variant="h4" gutterBottom>
              Normalt hjerte
            </MUI.Typography>
            <MUI.Box height="100%" width="100%" overflow="hidden">
              <ModelViewer poster="RasktHjerte" model="RasktHjerte">
              </ModelViewer>
            </MUI.Box>
          </MUI.Grid>
          <MUI.Grid item xs={12} md={6} flexGrow={1} p={6}>
            <MUI.Typography component="p" align="center" variant="h4" gutterBottom>
              Atrieflimren
            </MUI.Typography>
            <MUI.Box height="100%" width="100%" overflow="hidden">
              <ModelViewer poster="Atrieflimren" model="Atrieflimren">
              </ModelViewer>
            </MUI.Box>
          </MUI.Grid>
          <MUI.Grid component={MUI.Paper} container item md={12} mt={3} flexGrow={1}>
            <ListPicker topicId="Atrieflimren" topicIdx={1} isInModal={false} />
          </MUI.Grid>
          <FinalizeChoicesModal />
        </MUI.Grid>
      </MUI.Grid>
    </>
  )
}

export default AtrieFlimren
