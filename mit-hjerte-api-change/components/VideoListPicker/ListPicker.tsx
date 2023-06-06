import { Fragment } from "react"
import * as MUI from "@mui/material"
import Checkbox from "@mui/material/Checkbox"
import { useStore } from "../../util/store"
import OptionsWrapper from "../OptionsList/OptionsList"
import AccordionWrapper from "../OptionsAccordion"
import shallow from "zustand/shallow"

const ListPicker: React.FC<{
  topicIdx: number
  topicId: string
  isInModal: boolean
}> = ({ topicId, topicIdx, isInModal }) => {
  const topic = useStore((state) => state.allTopics[topicIdx], shallow)

  const toggleTopic = useStore((state) => state.toggleTopic)

  return (
    <MUI.Grid container>
      {isInModal ? <MUI.ListSubheader disableSticky>{topicId}</MUI.ListSubheader> : undefined}

      {/*  <MUI.List sx={{ overflow: "auto", maxHeight: "100%" }}>  */}

      <MUI.Grid item md={8}>
        <>
          <Checkbox
            onChange={(e) => {
              toggleTopic(topicIdx, e.target.checked)
            }}
            size="medium"
            checked={topic?.active}
          />
          {!isInModal && (
            <MUI.Typography ml={1} variant="overline">
              {topicId}
            </MUI.Typography>
          )}
        </>
      </MUI.Grid>
      <AccordionWrapper topicIdx={topicIdx} topicName={topic.id} />
    </MUI.Grid>
  )
}

export default ListPicker
