import { BrowserRouter } from 'react-router-dom';
import './css/App.css';
import CustomRoutes from './CustomRoutes.jsx';

function App() {
  return <>
    <BrowserRouter>
      <CustomRoutes />
    </BrowserRouter>
  </>
}

export default App;
