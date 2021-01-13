import {Provider} from 'react-redux'

import store from './store'
import GlobalStyles from './styles/global-styles'
import { TodoPage } from './pages/todo';
import { RouterConfig } from './routes';

function App() {
  return (
   <Provider store={store}>
      <RouterConfig />
      <GlobalStyles />
   </Provider>
  )
}

export default App;
