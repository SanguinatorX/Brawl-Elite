import { useEffect, useRef, useState } from "react"
import LiquidBackground from "https://cdn.jsdelivr.net/npm/threejs-components@0.0.27/build/backgrounds/liquid1.min.js"

function Bulles(props) {

  const canvasRef = useRef(null);
  const bullesRef = useRef(null);
  const [presencePluie, setPresencePluie] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return

    const bulles = LiquidBackground(canvasRef.current)
    bullesRef.current = bulles

    bulles.liquidPlane.material.metalness = 0.90
    bulles.liquidPlane.material.roughness = 0.20
    bulles.liquidPlane.uniforms.displacementScale.value = 5
    bulles.setRain(false)

    return () => {
      if (bulles.dispose) bulles.dispose()
    }
  }, [])

  const toggleRain = () => {
    // const newState = !presencePluie
    setPresencePluie((state) => !state)

    if (bullesRef.current) {
      bullesRef.current.setRain(!presencePluie)
    }
  }

  if (!props.bouton) {setPresencePluie(true);}

  return (
    <div className="bulles">
      <button onClick={toggleRain}>
        {presencePluie ? "Désactiver la pluie" : "Activer la pluie"}
      </button>
      <canvas ref={canvasRef}></canvas>
    </div>
  )
}

export default Bulles
