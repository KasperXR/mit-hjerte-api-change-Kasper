import React from "react"
import * as MUI from "@mui/material"
import { useStore } from "../../util/store"

function PassModal() {
  const w = "test"
  const passModalOpen = useStore((state) => state.passModalOpen)
  const togglePassModalOpen = useStore((state) => state.togglePassModal)
  const setPA = useStore((state) => state.setPassAccepted)
  const toggleMainModal = useStore((state) => state.toggleMainModal)

  const ch = () => {
    // @ts-ignore-next-line
    let st = document.getElementById("ch-pass-mit-hjerte")?.value
    if (st === w) {
      setPA(true)
      togglePassModalOpen(false)
      toggleMainModal(true)
    }
  }
  return (
    <MUI.Dialog open={passModalOpen} hideBackdrop disableEscapeKeyDown onClose={() => {}}>
      <MUI.DialogTitle>Har du adgang?</MUI.DialogTitle>
      <MUI.DialogContent>
        <MUI.DialogContentText>Indtast din kode</MUI.DialogContentText>
        <MUI.TextField autoFocus id="ch-pass-mit-hjerte" label="" fullWidth variant="standard" />
      </MUI.DialogContent>
      <MUI.DialogActions>
        <MUI.Button onClick={ch}>OK</MUI.Button>
      </MUI.DialogActions>
    </MUI.Dialog>
  )
}

export default PassModal
