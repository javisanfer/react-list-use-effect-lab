import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/ui";
import Home from './pages/home';

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
