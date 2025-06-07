import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Login from "./pages/Login/Auth"
import Invest from "./pages/ForInvestors/Invest"
import Help from "./pages/Help/Help"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/auth" element={<Login />}/>
        <Route path="/investor" element={<Invest />}/>
        <Route path="/help" element={<Help />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
