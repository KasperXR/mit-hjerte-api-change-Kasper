import * as MUI from "@mui/material"
import shallow from "zustand/shallow"
import { useStore } from "../../util/store"
import ListPicker from "./ListPicker"

const AllVideoListPicker: React.FC<{ isInModal: boolean }> = ({
  isInModal
}) => {
  const allTopics = useStore((state) => state.allTopics, shallow)

  return (
    <MUI.List sx={{ overflow: "auto", maxHeight: "100%" }}>
      {allTopics
        .filter((topic: Topic) => topic.id !== "Forside")
        .map((topic, idx) => (
          <ListPicker
            isInModal={isInModal}
            key={topic.id}
            topicIdx={idx + 1} // +1 because of the "Forside" topic
            topicId={topic.id}
          />
        ))}
    </MUI.List>
  )
}

export default AllVideoListPicker
