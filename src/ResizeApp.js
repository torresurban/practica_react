import { useEffect, useState } from "react"

const ResizeApp = () => {

    const [windowsWidth, setWindowsWidth] = useState(window.innerWidth)

    const isMobile = windowsWidth < 768

    useEffect(() => {
        window.addEventListener('resize', () => setWindowsWidth(window.innerWidth))
    },[])

  return (
    <div>
        <h1>{windowsWidth}</h1>
        {isMobile && <h2>Show only mobile device</h2>}
    </div>
  )
}

export default ResizeApp