interface Store {
  QRCode: string
  QRModalOpen: boolean
  passModalOpen: boolean
  fetchingQRCode: boolean
  allTopics: Topic[]
  complexOptionNumValArr: { name: string; vals: number[] }[]
  mainModalOpen: boolean
  toggleMainModal: (bool: boolean) => void
  passAccepted: boolean
  setPassAccepted: (bool: boolean) => void

  togglePassModal: (bool: boolean) => void
  setComplexOptionNumValArr: (name: string, valIdx: number, val: number) => void
  setQRCode: (qrCode: string) => void
  setFetchingQRCode: (toggle: boolean) => void
  toggleQRModal: (toggle: boolean) => void

  toggleTopic: (topicIdx: number, toggle: boolean) => void
  toggleParentOption: (idx: number, parentOptionIdx: number, togle: boolean) => void
  toggleOption: (topicIdx: number, parentOptionIdx: number, optionId: number, toggle: boolean) => void
  toggleOptionDisabled: (topicIdx: number, parentOptionIdx: number, optionId: number, toggle: boolean) => void
  setOptionValue: (
    topicIdx: number,
    parentOptionIdx: number,
    optionId: number,
    type: "slider" | "dropdown",
    value: any
  ) => void
}
