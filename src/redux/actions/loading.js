export const TypesLoading = {
  SHOW_LOADING: '[loading]: show loading',
  HIDE_LOADING: '[loading]: hide loading'
}

export const showLoading = () => ({
  type: TypesLoading.SHOW_LOADING
})

export const hideLoading = () => ({
  type: TypesLoading.HIDE_LOADING
})
