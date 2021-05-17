import Routes from './routes'

// redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

// reucers
import reducers from './store'

function App() {
  return (
    <Provider store={createStore(reducers, applyMiddleware(ReduxThunk))} >
      <Routes />
    </Provider>
  )
}

export default App
