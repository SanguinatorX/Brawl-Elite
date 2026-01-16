import { useEffect, useRef } from "react"
import AttractionCursor from "https://cdn.jsdelivr.net/npm/threejs-components@0.0.26/build/cursors/attraction1.min.js"

function Sparkler(props) {

  const canvasRef = useRef(null)
  const appRef = useRef(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const app = AttractionCursor(canvasRef.current, {
      particles: {
        attractionIntensity: 0.75,
        size: 1.5,
      },
    })

    appRef.current = app

    return () => {
      if (app.dispose) app.dispose()
    }
  }, [])

  const randomizeColors = () => {
    if (!appRef.current) return
    appRef.current.particles.light1.color.set(Math.random() * 0xffffff)
    appRef.current.particles.light2.color.set(Math.random() * 0xffffff)
  }

  return (
    <div className="sparkler" onClick={props.bouton ? null : randomizeColors}>
      {props.bouton ? <button onClick={randomizeColors}>Changer de couleur</button> : null}
      <canvas ref={canvasRef}></canvas>
    </div>
  )
}

export default Sparkler;