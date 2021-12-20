import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./assets/css/style.scss";
import MainLayout from "./layout/mainlayout";
import Home from "./pages/home";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <MainLayout>
        <Routes>
            <Route index element={<Home/>}></Route>
            <Route path='blog' element={<Home/>}></Route>
            <Route path='aboutus' element={<Home/>}></Route>
            <Route path='caterogy' element={<Home/>}></Route>
        </Routes>
      </MainLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
