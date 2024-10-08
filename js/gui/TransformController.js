import { TransformControls } from "three/examples/jsm/Addons.js";
import { TransformControlsGizmo } from "three/examples/jsm/Addons.js";

class TransformController {
    constructor(scene, camera, renderer) {
        this.controls = new TransformControls(camera, renderer.domElement);
        scene.add(this.controls);
    }

    getController() {
        return this.controls;
    }

    attachObject(object) {
        this.controls.attach(object);
    }

    detachObject() {
        this.controls.detach();
    }

    setMode(e) {
        switch (e.code) {
            case 'KeyT':
                this.controls.setMode('translate');
                break;
            case 'KeyR':
                this.controls.setMode('rotate');
                break;
            case 'KeyS':
                this.controls.setMode('scale');
                break;
            default:
                break;
        }
    }
}

export default TransformController;