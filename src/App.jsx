import { Route, Routes } from "react-router-dom"
import Blog from "./Pages/Blog"
import About from "./Pages/About"
import Home from "./Pages/Home"
import Shop from "./Pages/Shop"
import Sale from "./Pages/Sale"
import Contact from "./Pages/Contact"
import NavBar from "./Components/NavBar"
import Footer from "./Components/Footer"
import Features from "./Pages/Features"
import DetailsBlogs from "./Pages/DetailsBlogs"



function App() {

  return (
    <>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Sale" element={<Sale />} />
        <Route path="/FeatureS" element={<Features />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/NavBar" element={<NavBar />} />
        <Route path="Footer" element={<Footer />} />
        <Route path="/Details/:id" element={<DetailsBlogs />} />
      </Routes>
    </>
  )
}

export default App
