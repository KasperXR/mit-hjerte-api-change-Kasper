import { ModelViewerElement } from "@google/model-viewer"
import React from "react"

const ModelViewer: React.FC<ModelViewerElement> = (props) => {
  const { poster, model, fieldOfView = "20deg", cameraOrbit = "0deg 85deg auto", children } = props

  return (
    <>
      <>{children}</>
      <model-viewer
        id="reveal"
        autoPlay
        bounds="tight"
        camera-controls
        enable-pan
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-orbit={cameraOrbit}
        min-field-of-view="20deg"
        field-of-view={fieldOfView}
        interaction-prompt="none"
        reveal="auto"
        seamless-poster
        poster={`/images/${poster}.webp`}
        src={`/models/${model}.glb`}
      ></model-viewer>
    </>
  )
}

export default ModelViewer
