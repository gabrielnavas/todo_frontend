import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from './store'
import GlobalStyles from './styles/global-styles'
import { RouterConfig } from './routes/router-config';

function App() {
  return (
   <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterConfig />
        <GlobalStyles />
      </PersistGate>
   </Provider>
  )
}

export default App;
