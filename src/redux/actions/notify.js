export const NotifyTypes = {
  SHOW_NOTIFY: '[NOTIFY]: show notify',
  HIDE_NOTIFY: '[NOTIFY]: hide notify'
}

export const showNotify = (meta) => ({
  type: NotifyTypes.SHOW_NOTIFY,
  payload: {
    message: meta.message,
    type: meta.type
  }
})

export const hideNotify = () => ({
  type: NotifyTypes.HIDE_NOTIFY
})
