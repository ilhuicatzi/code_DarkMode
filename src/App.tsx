import { Route, Routes } from "react-router-dom"
import Astro from "./page/darkMode/Astro"
import Nextjs from "./page/darkMode/Nextjs"
import Vitejs from "./page/darkMode/Vitejs"
import HomePage from "@/page/HomePage"
import AboutPage from "./page/AboutPage"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/darkmode/astro" element={<Astro />} />
        <Route path="/darkmode/nextjs" element={<Nextjs />} />
        <Route path="/darkmode/vitejs" element={<Vitejs />} />
      </Routes>
      <Footer />
    </div>
  )
}
