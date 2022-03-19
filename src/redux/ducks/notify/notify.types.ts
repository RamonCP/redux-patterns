export const NotifyTypesAction = {
  SHOW_NOTIFY: '[NOTIFY]: show notify',
  HIDE_NOTIFY: '[NOTIFY]: hide notify'
}

export type NotifyTypes = {
  show: boolean
  message: string
  type: string
}
