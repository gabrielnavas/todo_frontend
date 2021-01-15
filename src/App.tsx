import {Provider} from 'react-redux'

import store from './store'
import GlobalStyles from './styles/global-styles'
import { RouterConfig } from './routes/router-config';

function App() {
  return (
   <Provider store={store}>
      <RouterConfig />
      <GlobalStyles />
   </Provider>
  )
}

export default App;
