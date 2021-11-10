import { Main } from './pages/Main'
import './styles/global.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { BrowserRouter } from 'react-router-dom'

library.add(fab)

function App() {
  return (    
      <Main />    
  );
}

export default App;
