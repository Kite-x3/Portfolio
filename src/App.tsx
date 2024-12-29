import './App.css'
import Footer from './components/footer/Footer'
import Navigation from './components/navigation/Navigation'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './utils/ScrollToTop'

import Home from './pages/Home'
import Projects from './pages/Projects'
import Contacts from './pages/Contacts'
import ScrollHandler from './utils/ScrollHandler'

export default function App() {
  return (
    <div className='App'>
      <Router basename='/Portfolio'>
        <ScrollToTop />
        <ScrollHandler />
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route path='/contacts' element={<Contacts />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}
