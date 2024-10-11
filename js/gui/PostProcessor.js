import { Raycaster } from 'three';
import { Vector2, Vector3 } from 'three';
import { OutlinePass, RenderPass } from 'three/examples/jsm/Addons.js';
import { EffectComposer } from 'three/examples/jsm/Addons.js';
import { ShaderPass } from 'three/examples/jsm/Addons.js';
import { FXAAShader } from 'three/examples/jsm/Addons.js';
import TransformController from './TransformController';
import { textureLoad } from 'three/examples/jsm/nodes/Nodes.js';

class PostProcessor {
    constructor(renderer, camera, scene) {
        this.raycaster = new Raycaster();

        this.selectedObject = null;
        this.composer = new EffectComposer(renderer);
        this.renderPass = new RenderPass(scene, camera);
        this.outlinePass = new OutlinePass(
            new Vector2(window.innerWidth, window.innerHeight),
            scene,
            camera
        );
        this.effectFXAA = new ShaderPass(FXAAShader);
    }
    initializePostProcessor() {
        // outline pass
        this.outlinePass.edgeStrength = 3.0;
        this.outlinePass.edgeGlow = 1.0;
        this.outlinePass.edgeThickness = 3.0;
        this.outlinePass.pulsePeriod = 0;
        this.outlinePass.usePatternTexture = false; // patter texture for an object mesh
        this.outlinePass.visibleEdgeColor.set("#1abaff"); // set basic edge color
        this.outlinePass.hiddenEdgeColor.set("#1abaff");
        // init shader
        this.effectFXAA.uniforms['resolution'].value.set(1 / window.innerWidth, 1 / window.innerHeight);
        this.effectFXAA.renderToScreen = true;
        // add to composer
        this.composer.addPass(this.renderPass);
        this.composer.addPass(this.outlinePass);
        this.composer.addPass(this.effectFXAA);
    }

    setHighlightColor(color) {
        this.outlinePass.visibleEdgeColor.set(color); // set basic edge color
        this.outlinePass.hiddenEdgeColor.set(color);
    }

    setSelectedObject(object) {
        this.selectedObject = object;
        this.outlinePass.selectedObjects = [this.selectedObject];
    }

    getSelectedObject() {
        return this.selectedObject;
    }

    selectObject(e, transformControls, camera, objects) {
        var mousePointer = new Vector3(
            (e.clientX / window.innerWidth) * 2 - 1,
            -(e.clientY / window.innerHeight) * 2 + 1,
            0.5
        );
        this.raycaster.setFromCamera(mousePointer, camera);
        var intersects = this.raycaster.intersectObjects(objects, true);
        if (intersects.length > 0) {
            this.selectedObject = intersects[0].object
            if (this.selectedObject.isObject3D) {
                this.outlinePass.selectedObjects = [this.selectedObject];
                transformControls.attachObject(this.selectedObject);
            }

        } /* else {
            this.selectedObject = null
            this.outlinePass.selectedObjects = [];
            this.transformControls.detachObject();
        }*/
    }
}

export default PostProcessor;