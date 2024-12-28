import { useEffect, useState } from 'react'
import clases from './BtnDarkMode.module.css'

export default function BtnDarkMode() {
  const [lightMode, setLightMode] = useState(false)

  useEffect(() => {
    if (lightMode) {
      document.body.classList.add('light')
    } else {
      document.body.classList.remove('light')
    }
  }, [lightMode])

  const toggleDarkMode = () => {
    setLightMode(!lightMode)
  }

  return (
    <button className={clases.BtnDarkMode} onClick={toggleDarkMode}>
      {lightMode ? 'Dark Mode' : 'Light Mode'}
    </button>
  )
}
