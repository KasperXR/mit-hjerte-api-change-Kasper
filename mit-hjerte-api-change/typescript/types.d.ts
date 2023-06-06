declare interface Topic {
  id: string
  videos: { name: string; description?: string }[]
  active: boolean
  parentOptions: ParentOption[]
}

declare interface ParentOption {
  name: string
  description?: string
  time?: number
  audioName?: string
  introduction?: string
  active?: boolean
  disabled?: boolean
  isParent?: boolean
  labelText?: string
  complex?: {
    number: boolean
    unit?: string
    precision?: number
    defaultStep?: number
    multiOption: boolean
    multiInput: boolean
  }
  hasRange?: boolean
  range?: number[]
  value?: int | string | Array<int | string>
  exclusiveTo?: (string | number)[]
  options?: IOption[]
}

declare interface IOption {
  id: number
  active: boolean
  name: string
  type?: string
  value?: string
  description?: string
  audioName: string
  addToPrev?: number 
  time: number
  delay: number
  /**
    * Describes the amount of inputs when parent option has multiInput set to true
    */
  multAmount?: number
  step?: number
  exclusive: boolean
  radio?: boolean
  slider?: boolean
  exclusiveTo?: 'all'[] | number[]
  enables?: number[] // ID of subchoices
  disabled?: boolean // Is this part disabled by default?
  disables?: 'all'[] | number[]
  disableOthers?: boolean
  separator?: boolean
}
