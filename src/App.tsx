import {Provider} from 'react-redux'

import store from './store'
import GlobalStyles from './styles/global-styles'
import { TodoPage } from './pages/todo';

function App() {
  return (
   <Provider store={store}>
      <TodoPage />
      <GlobalStyles />
   </Provider>
  )
}

export default App;
