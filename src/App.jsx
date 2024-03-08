import ProductPage from './pages/views/products.layout'
import {store} from './redux/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <ProductPage />
    </Provider>
  )
}

export default App
