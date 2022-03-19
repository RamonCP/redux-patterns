import { LoadingTypesAction } from './loading.types'

export const showLoading = () => ({
  type: LoadingTypesAction.SHOW_LOADING
})

export const hideLoading = () => ({
  type: LoadingTypesAction.HIDE_LOADING
})
