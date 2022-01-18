
import './App.css';
import User from './components/User';
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Image from './components/Image';

function App() {
  return (
    <div className="container mx-auto px-2">
      <BrowserRouter>
      <Routes>
        <Route path='/imagesapi' element={<Image />} />
        <Route path='/' element={<User />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
