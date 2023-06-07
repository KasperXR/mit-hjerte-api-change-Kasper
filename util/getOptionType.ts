const getOptType = (option: IOption) => {
  if (option.radio) {
    return "radio"
  }
  if (option.slider) {
    return "slider"
  }
  if (option.subOptions) {
    return "dropdown"
  }

  return "checkbox"
}

export default getOptType
