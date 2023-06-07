import { useStore } from "./store"

type opt = {
  topicIdx: number
  parentIdx: number
  idx: number
  toggle: boolean
}

const handleToggleOption = (
  topic: Topic,
  toggleOption: (_topicIdx: number, _parentOptionIdx: number, _idx: number, _toggle: boolean) => void,
  toggleOptionDisabled: (_topicIdx: number, _parentOptionIdx: number, _idx: number, _toggle: boolean) => void,
  settings: opt
) => {
  const { topicIdx, parentIdx, idx, toggle } = settings
  const option = topic.parentOptions[parentIdx].options![idx]
  const excludes: "all"[] | number[] = option.exclusiveTo || []
  const disables: "all"[] | number[] = option.disables || []
  const enables: "all"[] | number[] = option.enables || []

  // If topic isn't active yet, make it active
  /*   if (!topic.active && toggle) {
    let topics = useStore.getState().allTopics
    let newTopics = topics
    newTopics[topicIdx].active = true
    useStore.setState({ allTopics: newTopics })
  } else if (topic.active && !toggle) {
    topic.parentOptions[parentIdx].options?.every((opt) => {
      Boolean(opt.active)
    })
  } */

  // Toggle the option
  toggleOption(topicIdx, parentIdx, idx, toggle)

  // If the option is exclusive
  if (option.exclusive) {
    console.log("exclusive option")
    console.log("excludes", option.disables)
    console.log("disables", disables)
    console.log("enables", enables)
    /* If the option is not the one we are toggling
     * go through all the options and enable or diable them
     * depending on if they are in the enables or disables array
     */

    // Go through each parent option, each "subject" if you will
    topic.parentOptions.forEach((parentOption, curParentIdx) => {
      // Go through each option in the parent option
      parentOption.options?.forEach((opt, curIdx) => {
        // If the option has entries in the excludes array
        excludes.forEach((index) => {
          if (opt.id === index && curParentIdx === parentIdx) {
            // Toggle option if it is in the excludes array
            toggleOption(topicIdx, parentIdx, curIdx, false)

            // If the current option disables other options
            if (option.disableOthers) {
              // And it's being toggled on
              if (toggle === true) {
                /*  console.log(
                  `Disabling ${opt.name} inside parent ${parentOption.name}`,
                ) */

                toggleOptionDisabled(topicIdx, parentIdx, curIdx, true)
                // Or it's being toggled off
              } else {
                /* console.log(
                  `Re-enabling "${opt.name}"\nInside parent "${parentOption.name}"."`,
                ) */

                toggleOptionDisabled(topicIdx, parentIdx, curIdx, false)
              }
            }
          }
        })

        // If the option has entries in the enables array
        enables.forEach((index) => {
          // If the current option is in the enables array
          if (opt.id === index && curParentIdx === parentIdx) {
            // And it's being toggled on
            if (toggle === true) {
              /*  console.log(
                `Enabling "${opt.name}"\nInside parent "${parentOption.name}"`,
              ) */

              toggleOptionDisabled(topicIdx, parentIdx, curIdx, false)
              // Or it's being toggled off
            } else {
              /*  console.log(
                 `Re-disabling "${opt.name}"\nInside parent "${parentOption.name}"`,
               ) */

              toggleOption(topicIdx, parentIdx, curIdx, false)
              toggleOptionDisabled(topicIdx, parentIdx, curIdx, true)
            }
          }
        })
      })
    })
  }
}

export { handleToggleOption }
