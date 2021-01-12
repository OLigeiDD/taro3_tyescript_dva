import { create } from 'dva-core'
import { createLogger } from 'redux-logger'
import immer from 'dva-immer'

let app: {
  use: (arg0: any) => void
  model: (arg0: any) => any
  start: () => void
  _store: any
  getStore: () => any
  dispatch: any
}
let registered: boolean
const createApp = opt => {
  opt.onAction = [createLogger()]
  app = create(opt)
  app.use(immer())
  if (!registered) opt.models.forEach(model => app.model(model))
  registered = true
  app.start()
  const store = app._store
  app.getStore = () => store
  const dispatch = store.dispatch
  app.dispatch = dispatch
  return app
}

export default {
  createApp,
  getDispatch() {
    return app.dispatch
  },
}
