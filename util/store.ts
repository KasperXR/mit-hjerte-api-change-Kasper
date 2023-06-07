import create from "zustand"
import { devtools } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"
import { ATRIEFLIMMER, HJERTESVIGT } from "./store/data"

const useStore = create<Store>()(
  immer(
    devtools((set) => ({
      QRCode: "",
      fetchingQRCode: false,
      QRModalOpen: false,
      complexOptionNumValArr: [{}],
      passAccepted: false,
      mainModalOpen: false,
      toggleMainModal: (bool) =>
        set((state) => {
          state.mainModalOpen = bool
        }),
      setPassAccepted: (bool) =>
        set((state) => {
          state.passAccepted = bool
        }),
      setComplexOptionNumValArr: (name: string, valIdx: number, val: number) =>
        set((state) => {
          state.complexOptionNumValArr.find((arr) => arr.name === name)!.vals[valIdx] = val
        }),

      passModalOpen: false,
      togglePassModal: (bool: boolean) =>
        set((state) => {
          state.passModalOpen = bool
        }),

      setQRCode: (qrCode: string) =>
        set((state) => {
          state.QRCode = qrCode || ""
        }),
      toggleQRModal: (toggle: boolean) =>
        set((state) => {
          console.log("toggle QR Modal", toggle)
          console.log("state", state)
          state.QRModalOpen = toggle
        }),
      setFetchingQRCode: (toggle: boolean) =>
        set((state) => {
          state.fetchingQRCode = toggle
        }),

      toggleTopic: (topicIdx, toggle) => {
        set((state) => {
          console.log("toggleTopic", topicIdx, toggle)
          state.allTopics[topicIdx].active = toggle
        }),
          // false,
          {
            type: "toggleTopic",
            topicIdx
          }
      },

      toggleParentOption: (topicIdx, parentOptionIdx, toggle) => {
        set((state) => {
          state.allTopics[topicIdx].parentOptions[parentOptionIdx].active = toggle
        })
      },

      toggleOption: (topicIdx, parentIdx, optionIdx, toggle) => {
        set((state) => {
          state.allTopics[topicIdx].parentOptions[parentIdx].options![optionIdx].active = toggle
        })
      },
      toggleOptionDisabled: (topicIdx, parentIdx, optionIdx, toggle) => {
        set((state) => {
          state.allTopics[topicIdx].parentOptions[parentIdx].options![optionIdx].disabled = toggle
        })
      },
      setOptionValue: (topicIdx, parentIdx, optionIdx, type, value) => {
        set((state) => {
          const parentOption = state.allTopics[topicIdx].parentOptions[parentIdx]
          const option = parentOption.options![optionIdx]
          console.log(value)

          switch (type) {
            case "dropdown":
              option.subChoice = value
              break
            case "slider":
              console.log("setting slider val %s", value.target.textContent)
              parentOption.value = value.target.textContent
              break
            default:
              break
          }
        })
      },

      allTopics: [
        {
          id: "Forside",
          videos: [{ name: "Forside", description: "Forside" }],
          active: false,
          parentOptions: [
            {
              name: "",
              active: false
            }
          ]
        },

        {
          ...ATRIEFLIMMER,
          videos: [{ name: "Atrieflimmer", description: "" }]
        },

        {
          ...HJERTESVIGT
        },
        {
          id: "Aortastenose",
          active: false,
          videos: [{ name: "Aortastenose", description: "" }],
          parentOptions: [
            {
              name: "",
              active: false
            }
          ]
        },
        {
          id: "Pacemaker",
          active: false,
          videos: [{ name: "Pacemaker", description: "" }],
          parentOptions: [
            {
              name: "",
              active: false
            }
          ]
        },
        {
          id: "Åreforkalkning",
          active: false,
          videos: [{ name: "Åreforkalkning", description: "" }],
          parentOptions: [
            {
              name: "",
              active: false
            }
          ]
        }
      ]
    }))
  )
)

export { useStore }
