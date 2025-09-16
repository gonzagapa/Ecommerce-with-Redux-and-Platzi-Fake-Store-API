import { Provider } from "react-redux"
import { AppRoutes } from "./routes/AppRoutes"
import { store } from "./store"
import { ThemeProvider } from "./context"


export const EcommerceApp = ()=> {

  return (
    <Provider store={store}>
      <ThemeProvider>
        <AppRoutes/>
      </ThemeProvider>
    </Provider>
  )
}
