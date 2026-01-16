import { useEffect, useRef, useState } from "react"
import Spheres1Background from "https://cdn.jsdelivr.net/npm/threejs-components@0.0.17/build/backgrounds/spheres1.cdn.min.js"

function Spheres(props) {

  const canvasRef = useRef(null)
  const bgRef = useRef(null)
  const [gravityOn, setGravityOn] = useState(true)

  useEffect(() => {
    if (!canvasRef.current) return

    const bg = Spheres1Background(canvasRef.current, {
      count: 300,
      minSize: 0.3,
      maxSize: 1,
      gravity: 2
    })

    bgRef.current = bg

    return () => {
      if (bg.dispose) bg.dispose()
    }
  }, [])

  const toggleGravity = () => {
    if (!bgRef.current) return

    const newGravity = gravityOn ? 0 : 1
    bgRef.current.spheres.config.gravity = newGravity
    setGravityOn(!gravityOn)
  }

  const randomColors = () => {
    if (!bgRef.current) return
    bgRef.current.spheres.setColors([
      Math.random() * 0xffffff,
      Math.random() * 0xffffff,
      Math.random() * 0xffffff
    ])
  }

  return (
    <div className="spheres">
        <button onClick={toggleGravity}>
          Toggle gravity
        </button>
        <button onClick={randomColors}>
          Random colors
        </button>
      <canvas id="canvas" ref={canvasRef}></canvas>
    </div>
  )
}

export default Spheres;