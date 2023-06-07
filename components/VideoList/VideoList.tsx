import * as MUI from "@mui/material"
import { useStore } from "../../util/store"
import ListPicker from "../VideoListPicker/ListPicker"

const AllVideoListPicker = ({ isInModal }) => {
  const allVideos = useStore((state) => state.allVideos)

  return (
    <MUI.List sx={{ overflow: "auto", maxHeight: "100%" }}>
      {allVideos
        .filter((video) => video.id !== "Forside")
        .map((vidsSection) => (
          <ListPicker
            isInModal={isInModal}
            key={vidsSection.id}
            videoListId={vidsSection.id}
          />
        ))}
    </MUI.List>
  )
}

export default AllVideoListPicker
