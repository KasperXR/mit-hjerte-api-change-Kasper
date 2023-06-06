import * as MUI from "@mui/material"
import { useRouter } from "next/router"

const DownloadPage = () => {
  const router = useRouter()

  const downloader = async () => {
    const url = `https://api.mit-hjerte.dk/videos/output/${router.query.url}`
    const response = await fetch(url, {
      cors: "cors"
    })
      .then((res) => res.blob())
      .then((blob) => {
        // Get current date in format DD-MM-YYYY
        const date = new Date()
          .toLocaleDateString("da-DK", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
          })
          .replace(/\./g, "-")

        // Create a new anchor element and make it a download link for the blob
        const url = window.URL.createObjectURL(blob)
        const link = document.createElement("a")
        link.href = url
        // Set download attribute and name of the file
        link.setAttribute("download", `mit-hjerte-${date}.mp4`)
        document.body.appendChild(link)
        link.click()
      })
      .catch((err) => console.log(err))

    return response
  }

  return (
    <MUI.Grid
      sx={{ zIndex: 1 }}
      maxWidth="100vw"
      maxHeight="100vh"
      container
      alignContent="center"
      justifyContent="center"
    >
      <MUI.Button
        onClick={() => downloader().then(() => console.log("Downloaded"))}
        size="large"
        fullWidth
        sx={{
          mt: 3,
          fontSize: "2rem",
          maxHeight: "90vh"
        }}
        variant="contained"
        color="primary"
      >
        Download Video
      </MUI.Button>
      <MUI.Typography >
        Ved at klikke på dette link, vælger du at downloade af egen fri vilje.
      </MUI.Typography>
    </MUI.Grid>
  )
}

export default DownloadPage
