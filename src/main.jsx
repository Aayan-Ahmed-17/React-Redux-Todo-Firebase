import { createRoot } from 'react-dom/client'
import './index.css'
import App from './TodoApp.jsx'
import { Provider } from 'react-redux'
import { store } from './configs/redux/store/store.js'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
