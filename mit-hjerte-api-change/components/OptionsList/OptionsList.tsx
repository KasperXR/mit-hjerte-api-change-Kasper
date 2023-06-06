import * as MUI from "@mui/material"
import { ReactElement } from "react"
import { useStore } from "../../util/store"

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps: MUI.MenuProps["PaperProps"] = {
    style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP
    }
}

const OptionsList: React.FC<{
    topicIdx: number
}> = (props) => {
    const { topicIdx } = props
    const topic = useStore((state) => state.allTopics[topicIdx])
    const toggleOption = useStore((state) => state.toggleOption)
    const toggleOptionDisabled = useStore((state) => state.toggleOptionDisabled)

    const elementArr: ReactElement[] = topic?.parentOptions.map(
        (parentOption, i) => (
            <MUI.Grid
                key={`${topic}-grid-${i}`}
                sx={{
                    mb: 0.75,
                    mt: i !== 0 ? 0.75 : "inherit",
                    pl: 1,
                    pr: 1,
                    maxWidth: "100%"
                }}
                item
                xs={12}
                component={MUI.FormControl}
            >
                <>
                    <MUI.InputLabel id={`${topic}-${parentOption.name}`}>
                        {parentOption.name}
                    </MUI.InputLabel>
                    <MUI.Select
                        labelId={`${topic}-${parentOption.name}`}
                        id={`${topic}-${parentOption.name}-select`}
                        multiple
                        fullWidth
                        value={parentOption.options
                            ?.filter((option) => option.active)
                            .map((option) => option.name)}
                        input={<MUI.OutlinedInput label={parentOption.name} />}
                        renderValue={(selected) => selected.join(", ")}
                        MenuProps={{ PaperProps: MenuProps }}
                    >
                        {parentOption.options?.map((option, idx) => (
                            <MUI.MenuItem
                                key={`${topic.id}-${option.name}-${option.id}`}
                                divider={option.separator}
                                dense={false}
                                // value={option.name}
                            >
                                {option.radio ? (
                                    <MUI.Radio
                                        checked={option.active}
                                        disabled={option.disabled}
                                        color="primary"
                                        value={option.name}
                                        onChange={(e) =>
                                            handleToggleOption(
                                                topicIdx,
                                                i,
                                                idx,
                                                e.target.checked
                                            )
                                        }
                                        edge="start"
                                    ></MUI.Radio>
                                ) : (
                                    <MUI.Checkbox
                                        edge="start"
                                        checked={option.active}
                                        onChange={(e) =>
                                            handleToggleOption(
                                                topicIdx,
                                                i,
                                                idx,
                                                e.target.checked
                                            )
                                        }
                                        value={idx}
                                        inputProps={{
                                            "aria-label": `${option.name}-checkbox`
                                        }}
                                    />
                                )}
                                <MUI.ListItemText primary={option.name} />
                            </MUI.MenuItem>
                        ))}
                    </MUI.Select>
                </>
            </MUI.Grid>
        )
    )

    return <>{elementArr}</>
}

const OptionsWrapper: React.FC<{
    topicIdx: number
}> = (props) => {
    const { topicIdx } = props

    return <OptionsList key={`${topicIdx}`} topicIdx={topicIdx} />
}

export default OptionsWrapper
