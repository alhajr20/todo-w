import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/navbar';
import Promo from "./components/promo";
import Todos from "./components/todos";
import './App.css';

const App = () => {

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Promo />}/>
          <Route path="/todos" element={<Todos />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
