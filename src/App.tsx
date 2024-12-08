import './App.css'
import Footer from './components/footer/Footer'
import Navigation from './components/navigation/Navigation'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'

export default function App() {
  return (
    <div className='App'>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route path='/contacts' element={<Projects />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}
