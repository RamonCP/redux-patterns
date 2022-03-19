import { NotifyTypesAction, NotifyTypes } from './notify.types'

type showNotifyType = Pick<NotifyTypes, 'message' | 'type'>

export const showNotify = (meta: showNotifyType) => ({
  type: NotifyTypesAction.SHOW_NOTIFY,
  payload: {
    message: meta.message,
    type: meta.type
  }
})

export const hideNotify = () => ({
  type: NotifyTypesAction.HIDE_NOTIFY
})
