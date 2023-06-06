import * as MUI from "@mui/material"
import React, { useCallback, useEffect, useState } from "react"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

import { useStore } from "../../util/store"
import { handleToggleOption } from "../../util/handleToggleOption"
import getOptType from "../../util/getOptionType"

const makeId = () => `${(Math.random() + 1).toString(36)}0000`.slice(2, 7)

function RenderTopic(props: { idx: number; topic: Topic }) {
  const {
    idx,
    topic: { parentOptions }
  } = props

  // return Accordion for each parentOption
  return <RenderParentOptions topicIdx={idx} parentOptions={parentOptions} />
}

function RenderParentOptions(props: { topicIdx: number; parentOptions: ParentOption[] }) {
  const { topicIdx, parentOptions } = props
  const Elements: { parentOptIdx: number; name: string; element: React.ReactNode }[] = []

  parentOptions.forEach((parentOption, parentOptIdx) => {
    // @ts-ignore
    let element = <RenderOptions topicIdx={topicIdx} parentOptIdx={parentOptIdx} options={parentOption.options!} />

    Elements.push({ parentOptIdx, name: parentOption.name, element })
  })

  const [currentExpandedId, setExpanded] = React.useState<string | false>(false)
  const toggleAccordion = (id: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? id : false)
  }

  const getId = (id: string) => id.substring(0, 9) // 9 is arbitrary, should be somewhat unique

  return (
    <>
      {Elements.map(({ parentOptIdx, name, element }) => (
        <MUI.Accordion
          sx={{ width: "100%" }}
          key={`${parentOptIdx}-element-${topicIdx}`}
          onChange={toggleAccordion(getId(name))}
          expanded={currentExpandedId === getId(name)}
        >
          <MUI.AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${name}-content`}
            id={`${name}-content`}
          >
            <MUI.Typography>{name}</MUI.Typography>
          </MUI.AccordionSummary>
          <MUI.AccordionDetails>{element}</MUI.AccordionDetails>
        </MUI.Accordion>
      ))}
    </>
  )
}

function valuetext(value: number, labelText: string) {
  return `${value}${labelText}`
}

function RenderOptions(props: { topicIdx: number; parentOptIdx: number }) {
  const { topicIdx, parentOptIdx } = props
  const topic = useStore((state) => state.allTopics[topicIdx])
  const toggleOption = useStore((state) => state.toggleOption)
  const toggleOptionDisabled = useStore((state) => state.toggleOptionDisabled)
  const setOptionValue = useStore((state) => state.setOptionValue)
  const parentOption = topic.parentOptions[parentOptIdx]

  const Elements = parentOption.options?.map((option, idx) => {
    const type = getOptType(option)
    // Render the option based on its type
    switch (type) {
      case "radio":
        return (
          <MUI.Box
            key={`option-${topicIdx}-${parentOptIdx}-${idx}`}
            component={MUI.ListItemButton}
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="space-around"
            onClick={(e) =>
              handleToggleOption(topic, toggleOption, toggleOptionDisabled, {
                topicIdx,
                parentIdx: parentOptIdx,
                idx,
                toggle: !option.active
              })
            }
          >
            <Radio
              checked={option.active}
              disabled={option.disabled || false}
              //     onChange={handleChange}
              inputProps={{ "aria-label": `${option.name}-radio` }}
            />
            <MUI.ListItemText>{option.name}</MUI.ListItemText>
          </MUI.Box>
        )
      case "checkbox":
        return (
          <MUI.Box
            key={`option-${topicIdx}-${parentOptIdx}-${idx}`}
            component={MUI.ListItemButton}
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="space-around"
            onClick={(e) =>
              handleToggleOption(topic, toggleOption, toggleOptionDisabled, {
                topicIdx,
                parentIdx: parentOptIdx,
                idx,
                toggle: !option.active
              })
            }
          >
            <Checkbox
              checked={option.active}
              disabled={option.disabled || false}
              //onChange={(e) => handleChange(e)}
              inputProps={{ "aria-label": `${option.name}-checkbox` }}
            />
            <MUI.ListItemText>{option.name}</MUI.ListItemText>
          </MUI.Box>
        )
      case "slider":
        handleToggleOption(topic, toggleOption, toggleOptionDisabled, {
          topicIdx,
          parentIdx: parentOptIdx,
          idx,
          toggle: true
        })

        return (
          <MUI.Box
            key={`option-${topicIdx}-${parentOptIdx}-${idx}`}
            component={MUI.ListItemButton}
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="space-around"
          /*  onClick={(e) =>
            handleToggleOption(topic, toggleOption, toggleOptionDisabled, {
              topicIdx,
              parentIdx: parentOptIdx,
              idx,
              toggle: !option.active
            })
          } */
          >
            <MUI.Box sx={{ width: 300 }}>
              <MUI.Slider
                onChangeCommitted={(e) => setOptionValue(topicIdx, parentOptIdx, idx, "slider", e)}
                getAriaValueText={(n) => valuetext(n, parentOption.labelText)}
                valueLabelFormat={(n) => valuetext(n, parentOption.labelText)}
                defaultValue={parentOption.defaultValue}
                min={parentOption.range[0]}
                max={parentOption.range[1]}
                disabled={option.disabled || false}
                // onChange={(e) => handleChange(e)}
                valueLabelDisplay="on"
                ariaLabel={`${option.name}-checkbox`}
              />
              <MUI.ListItemText>{option.name}</MUI.ListItemText>
            </MUI.Box>
          </MUI.Box>
        )
      case "dropdown":
        return <RenderDropdown tIdx={topicIdx} pOptIdx={parentOptIdx} optIdx={idx} opt={option} />
      default:
        return null
    }
  })

  return <>{Elements}</>
}

function RenderDropdown(props: { tIdx: number; pOptIdx: number; optIdx: number; opt: IOption }) {
  const { tIdx, pOptIdx, optIdx, opt } = props

  const setOptionValue = useStore((state) => state.setOptionValue)
  const toggleOption = useStore((state) => state.toggleOption)

  return (
    <>
      <MUI.Box
        component={MUI.ListItemButton}
        centerRipple={false}
        focusRipple={false}
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-around"
      >
        <MUI.Checkbox
          checked={opt.active}
          disabled={opt.disabled || false}
          onChange={(e) => toggleOption(tIdx, pOptIdx, optIdx, !opt.active)}
          inputProps={{ "aria-label": `${opt.name}-checkbox` }}
        />
        <MUI.ListItemText>{opt.name}</MUI.ListItemText>
        <MUI.FormControl variant="standard">
          <MUI.InputLabel id="standard-label"></MUI.InputLabel>
          <MUI.Select
            labelId="select-standard-label"
            id="select-standard"
            fullWidth
            value={opt.subChoice}
            onChange={(e) => setOptionValue(tIdx, pOptIdx, optIdx, "dropdown", e.target.value)}
          >
            {opt.subOptions.map((subOpt) => (
              <MUI.MenuItem key={`${subOpt.name}-menuitem-RenderOption`} value={subOpt}>{subOpt}</MUI.MenuItem>
            ))}
          </MUI.Select>
        </MUI.FormControl>
      </MUI.Box>
    </>
  )
}

function RenderOption(props: {
  topicIdx: number
  parentOptIdx: number
  option: IOption
  type: "checkbox" | "radio" | "slider"
  parentOptions?: any
}) {
  const { topicIdx, parentOptIdx, option, type } = props

  const opt = useStore(
    useCallback(
      (state) => state.allTopics[topicIdx].parentOptions[parentOptIdx].options![option.id],

      [option.id, parentOptIdx, topicIdx]
    )
  )

  const toggleOption = useStore((state) => state.toggleOption)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    toggleOption(topicIdx, parentOptIdx, opt.id, e.target.checked)
  }

  switch (type) {
    case "radio":
      return (
        <Radio
          checked={opt.active}
          disabled={opt.disabled || false}
          onChange={handleChange}
          inputProps={{ "aria-label": `${opt.name}-radio` }}
        />
      )
    case "checkbox":
      return (
        <Checkbox
          checked={opt.active}
          disabled={opt.disabled || false}
          onChange={(e) => handleChange(e)}
          inputProps={{ "aria-label": `${opt.name}-checkbox` }}
        />
      )
    case "slider":
      return (
        <MUI.Slider
          min={parentOptions.range[0]}
          max={parentOptions.range[1]}
          checked={option.active}
          disabled={option.disabled || false}
          // onChange={(e) => handleChange(e)}
          inputProps={{ "aria-label": `${opt.name}-checkbox` }}
        />
      )

    default:
      return <></>
  }
}

function Checkbox(props: {
  checked: boolean
  disabled: boolean
  inputProps: { [key]: string }
  onChange: (_: React.ChangeEvent<HTMLInputElement>) => void
}) {
  const { checked, disabled, onChange } = props
  return <MUI.Checkbox checked={checked} disabled={disabled} />
}

function Radio(props: {
  checked: boolean
  disabled: boolean
  inputProps: { [key]: string }
  onChange: (_: React.ChangeEvent<HTMLInputElement>) => void
}) {
  const { checked, disabled, onChange } = props
  return <MUI.Radio checked={checked} onChange={onChange} disabled={disabled} />
}

export { RenderOptions, RenderTopic }
