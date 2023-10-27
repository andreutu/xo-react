import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Game from "./pages/Game"
import NotFound from "./pages/NotFound"

const CustomRoutes = () => {
  return <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/game" element={<Game />} />
    <Route path="*" element={<NotFound /> } />
  </Routes>
}

export default CustomRoutes