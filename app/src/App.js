import {BrowserRouter , Routes , Route} from "react-router-dom";
import HomePage from "./pages/Homepage";
import Checkoutpage  from "./pages/Checkoutpage";
import MainLayout from "./layout/MainLayout";
import './assets/css/global.scss'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/checkout' element={<Checkoutpage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
