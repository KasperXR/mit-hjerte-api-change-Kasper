// This is a MUI modal component
// It will take the currently chosen videos and display them in a list
// It will also allow the user to remove the videos from being chosen
// It provides a button to submit the chosen videos
// And display the resulting url in a QR code.
import * as MUI from "@mui/material"
import { Close } from "@mui/icons-material"
import { useStore } from "../../util/store"

import QRCodeComponent from "../QRCode"
import AllVideoListPicker from "../VideoListPicker/AllVideosList"
import PassModal from "../PassModal"

function FinalizeChoicesModal() {
  const open = useStore((state) => state.mainModalOpen)
  const toggleModal = useStore((state) => state.toggleMainModal)
  const handleClose = () => toggleModal(false)
  const pA = useStore((state) => state.passAccepted)
  const togglePassModalOpen = useStore((state) => state.togglePassModal)
  const handleOpen = () => {
    if (pA) {
      toggleModal(true)
    } else {
      togglePassModalOpen(true)
    }
  }

  const loading = useStore((state) => state.fetchingQRCode)

  const allTopics = useStore((state) => state.allTopics)
  const setQRCode = useStore((state) => state.setQRCode)
  const setFetchingQRCode = useStore((state) => state.setFetchingQRCode)
  const toggleQRModal = useStore((state) => state.toggleQRModal)

  const generateVideosList = () => {
    const activeChoices: Topic[] = []
    const topics = JSON.parse(JSON.stringify(allTopics))
    topics.map((topic) => {
      if (topic.active) {
        topic.parentOptions.map((pOpt) => {
          // If option is a slider
          if (pOpt.hasRange) {
            let words = pOpt.description.split(" ")
            let val = words.findIndex((value, i) => {
              if (value === "{value}") return i
            })

            if (val !== -1) {
              words[val] = pOpt.value
            }

            pOpt.options[0].name = words.join(" ")
            console.log(pOpt.options[0])
          } else {
            pOpt.options.map((opt, i) => {
              if (opt.subOptions) {
                opt.name += ", " + opt.subChoice
              }

              // TODO: Change audioName to acommodate either A or B.
              if (opt.addToPrev) {
                pOpt.options[i - opt.addToPrev].name += " " + opt.name
                pOpt.options.splice(i, opt.addToPrev)

                pOpt.options[i - opt.addToPrev].audioName = opt.audioName
              }

              console.log(pOpt)
            })
          }
        })
        activeChoices.push(topic)
      }
    })

    return activeChoices
  }

  const getUrl = async () => {
    setFetchingQRCode(true)
    return fetch("https://api.mit-hjerte.dk/api", {
      //     return fetch("http://localhost:8080/api", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "text/plain"
      },
      body: JSON.stringify({
        payload: generateVideosList()
      })
    })
      .then((res) => res.text())
      .then((res) => {
        console.log(`Succes!:\n${res}`)
        setQRCode(res)

        setFetchingQRCode(false)

        return res
      })
      .catch((err) => {
        console.error(err)
        toggleQRModal(false)
        setFetchingQRCode(false)
      })
  }

  return (
    <>
      <MUI.Button
        variant="contained"
        size="large"
        fullWidth
        sx={{
          mt: 2,
          mb: 1,
          height: 52,
          fontSize: "1.2rem"
        }}
        onClick={handleOpen}
      >
        Generèr QR Kode
      </MUI.Button>
      <PassModal />
      <MUI.Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        keepMounted={false}
        closeAfterTransition
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <MUI.AppBar sx={{ position: "relative" }}>
          <MUI.Toolbar>
            <MUI.IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <Close />
            </MUI.IconButton>
            <MUI.Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Lav video
            </MUI.Typography>
          </MUI.Toolbar>
        </MUI.AppBar>
        <AllVideoListPicker isInModal />

        <MUI.Button
          disabled={loading}
          onClick={() => {
            toggleQRModal(true)
            setQRCode("")
            getUrl()
          }}
          variant="contained"
          size="large"
          sx={{
            mt: 2,
            mb: 1,
            ml: 1,
            mr: 1,
            height: 52,
            fontSize: "1.2rem"
          }}
        >
          Generèr QR Kode
        </MUI.Button>
        <QRCodeComponent />
      </MUI.Dialog>
    </>
  )
}

export default FinalizeChoicesModal
