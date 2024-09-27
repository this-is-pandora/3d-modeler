import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

/* 
* The scene manager
* responsibilities include:
* - create scene, renderer, & camera
* - initialize scene subjects (e.g. place meshes)
* - update each frame
* - etc.
*/

class SceneManager {
    constructor(canvas) {
        if (SceneManager._instance) {
            return SceneManager._instance;
        }
        SceneManager._instance = this;
        this.canvas = canvas;
        // set up scene
        this.scene = new THREE.Scene();
        this.sceneSubjects = new Array();
        // set up camera
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth /
            window.innerHeight, 0.1, 1000
        );
        this.camera.position.set(2, 2, 4);
        this.camera.lookAt(0, 0, 0);
        // setup WebGL renderer
        this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        // controls for moving and rotating the camera
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    }

    update() {
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    }

    addObject(object, x = 0.0, y = 0.0, z = 0.0) {
        let mesh = object.getMesh();
        mesh.position.set(x, y, z);
        this.scene.add(mesh);
    }
    // called everytime the window is resized
    onWindowResize() {

    }

}

export default SceneManager;