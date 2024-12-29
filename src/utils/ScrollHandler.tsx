import { useEffect } from 'react'

const ScrollHandler: React.FC = () => {
  useEffect(() => {
    let isScrolling: ReturnType<typeof setTimeout>

    const handleScroll = () => {
      document.body.classList.add('scrolling')
      clearTimeout(isScrolling)
      isScrolling = setTimeout(() => {
        document.body.classList.remove('scrolling')
      }, 2000)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return null
}

export default ScrollHandler
