import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Admin from './Pages/Admin/Admin';

import { Home } from './Pages/Home/Home';
import Hotel from './Pages/Hotel';
import List from './Pages/List';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route path="/hotels" element={<List/>}/>
    <Route path="/hotels/:id" element={<Hotel/>}/>
    <Route path="/admin" element={<Admin/>}/>

  </Routes>
  </BrowserRouter>
  );
}

export default App;
