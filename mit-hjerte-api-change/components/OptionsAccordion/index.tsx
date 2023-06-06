import * as MUI from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import React, { useEffect, useRef, useState } from "react"
import shallow from "zustand/shallow"
import { useStore } from "../../util/store"
import { handleToggleOption } from "../../util/handleToggleOption"
import { RenderTopic } from "./RenderOptions"

// Check if parentOption has the complex property, and if so, return the proper component
function AccordionComponent(props: { topicIdx: number }) {
  const { topicIdx } = props
  const [currentExpandedId, setExpanded] = useState<string | false>(false)

  const toggleOption = useStore((state) => state.toggleOption)
  const toggleOptionDisabled = useStore((state) => state.toggleOptionDisabled)
  const topic = useStore((state) => state.allTopics[topicIdx])
  const toggleAccordion = (id: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? id : false)
  }

  const getId = (id: string) => id.substring(0, 9) // 9 is arbitrary, should be somewhat unique

  const Elements = topic.parentOptions.map((parentOpt, parentOptIdx) => (
    <MUI.Accordion
      sx={{ width: "100%" }}
      key={`${parentOpt.name}-${(Math.random() + 1).toString(36).substring(7)}-element-${topicIdx}`}
      onChange={toggleAccordion(getId(parentOpt.name))}
      expanded={currentExpandedId === getId(parentOpt.name)}
    >
      <MUI.AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${parentOpt.name}-content`}
        id={`${parentOpt.name}-content`}
      >
        <MUI.Typography>{parentOpt.name}</MUI.Typography>
      </MUI.AccordionSummary>
      <MUI.AccordionDetails>
        {parentOpt.options &&
          parentOpt.options.map((option, idx) => (
            <MUI.Box
              key={`${option.name}-${(Math.random() + 1).toString(36).substring(7)}-element-${topicIdx}`}
              component={MUI.ListItemButton}
              mx={2}
              my={1}
              p={1}
              pr={3}
              width="100%"
              display="flex"
              alignItems="center"
              justifyContent="space-around"
              onClick={() =>
                !option.disabled &&
                handleToggleOption(topic, toggleOption, toggleOptionDisabled, {
                  topicIdx,
                  parentIdx: parentOptIdx,
                  idx,
                  toggle: !option.active
                })
              }
            >
              {option.separator ? <MUI.Divider /> : null}

              {option.radio ? (
                <MUI.Radio checked={option.active} disabled={option.disabled} color="primary" />
              ) : (
                <MUI.Checkbox
                  checked={option.active}
                  disabled={option.disabled}
                  // value={idx}
                  inputProps={{
                    "aria-label": `${option.name}-checkbox`
                  }}
                />
              )}
              <MUI.ListItemText primary={option.name} />
            </MUI.Box>
          ))}
      </MUI.AccordionDetails>
    </MUI.Accordion>
  ))

  return <RenderTopic idx={topicIdx} topic={topic} />
}

function AccordionWrapper(props: { topicIdx: number; topicName: string }) {
  const { topicIdx, topicName } = props

  return <AccordionComponent topicIdx={topicIdx} />
}

export default AccordionWrapper
