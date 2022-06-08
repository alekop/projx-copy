import './styles.css'
import { Engine, Scene } from "@babylonjs/core"

async function main() {
    let canvas = document.getElementById('canvas') as HTMLCanvasElement
    if (!canvas) throw new Error('Canvas not found.')

    let engine = new Engine(canvas, true, {
        deterministicLockstep: true,
        adaptToDeviceRatio: true
    }, true)

    let scene = new Scene(engine)
    engine.runRenderLoop(() => {
        scene.render()
    });
}

window.onload = main
