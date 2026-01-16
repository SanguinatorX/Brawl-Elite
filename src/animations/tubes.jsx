import { useEffect, useRef } from "react"
import TubesCursor from "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js"

function Tubes(props) {

  const canvasRef = useRef(null)
  const appRef = useRef(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const app = TubesCursor(canvasRef.current, {
      tubes: {
        colors: ["#f967fb", "#53bc28", "#6958d5"],
        lights: {
          intensity: 200,
          colors: ["#83f36e", "#fe8a2e", "#ff008a", "#60aed5"]
        }
      }
    })

    appRef.current = app

    return () => {
      if (app.dispose) app.dispose()
    }
  }, [])

  const randomColors = (count) => {
    return new Array(count)
      .fill(0)
      .map(() => "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0"))
  }

  const changeColors = () => {
    if (!appRef.current) return
    const colors = randomColors(3)
    const lightsColors = randomColors(4)
    appRef.current.tubes.setColors(colors)
    appRef.current.tubes.setLightsColors(lightsColors)
  }

  return (
    <div className="tubes" onClick={props.bouton ? null : changeColors}>
      {props.bouton ? <button onClick={changeColors}>Changer de couleur</button> : null}
      <canvas ref={canvasRef}></canvas>
    </div>
  )
}

export default Tubes;