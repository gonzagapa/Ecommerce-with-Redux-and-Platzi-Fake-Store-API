import { Provider } from "react-redux"
import { AppRoutes } from "./routes/AppRoutes"
import { store } from "./store"


export const EcommerceApp = ()=> {

  return (
    <Provider store={store}>
      <AppRoutes/>
    </Provider>
  )
}
