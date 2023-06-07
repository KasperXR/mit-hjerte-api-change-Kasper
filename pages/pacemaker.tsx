import * as MUI from "@mui/material"
import { ListPicker, ModelViewer } from "../components"
import VideoPickerModal from "../components/Modal"

const Pacemaker = () => {
  return (
    <>
      <MUI.Grid sx={{ minHeight: "80vh" }} elevation={3} item xs={11}>
        <MUI.Grid container>
          <MUI.Grid
            item
            xs={12}
            md={12}
            flexGrow={1}
            minHeight={600}
            maxHeight="80vh"
          >
            <MUI.Box height="100%" width="100%" overflow="hidden">
              <ModelViewer poster="Pacemaker" model="Pacemaker">
                <MUI.Typography component="p" align="center" variant="h4">
                  Pacemaker
                </MUI.Typography>
              </ModelViewer>
            </MUI.Box>
          </MUI.Grid>
    
          <VideoPickerModal />
        </MUI.Grid>
      </MUI.Grid>
    </>
  )
}

export default Pacemaker
