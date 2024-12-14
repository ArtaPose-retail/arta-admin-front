import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import storeGenerator from './Redux/store.js'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={storeGenerator().store}>
    <PersistGate loading={null} persistor={storeGenerator()?.persistor}>
      <App />
    </PersistGate>
  </Provider>
)
