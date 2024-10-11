//import GUI from '../gui/gui';
import * as THREE from 'three';
import PostProcessor from '../gui/PostProcessor';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import TransformController from '../gui/TransformController';
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
        // set up camera
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth /
            window.innerHeight, 0.1, 1000
        );

        // setup WebGL renderer
        this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        // controls for moving and rotating the camera
        this.orbitControls = new OrbitControls(this.camera, this.renderer.domElement);
        this.transformControls = new TransformController(this.camera, this.renderer);
        // responds to mouse clicks to select objects
        this.objects = [];
        // for post-processing
        this.postProcessor = new PostProcessor(this.renderer, this.camera, this.scene);
    }
    initializeSceneManager() {
        // initialize the camera
        this.camera.position.set(2, 2, 4);
        this.camera.lookAt(0, 0, 0);
        // add a light
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(1, 1, 1);
        // post processor
        this.postProcessor.initializePostProcessor();
        this.transformControls
            .getController()
            .addEventListener('dragging-changed',
                (e) => {
                    this.orbitControls.enabled = !e.value;
                }
            );
        this.scene.add(this.transformControls.getController());
        this.scene.add(light);
    }
    update() {
        this.orbitControls.update();
        this.postProcessor.composer.render();
        //this.renderer.render(this.scene, this.camera);
    }

    addObject(object, x = 0.0, y = 0.0, z = 0.0) {
        let mesh = object.getMesh();
        mesh.position.set(x, y, z);
        this.objects.push(mesh);
        this.scene.add(mesh);
    }

    deleteObject(object) {
        // TODO
    }

    // called everytime the window is resized
    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, innerHeight);
    }

    onMouseClick(e) {
        this.postProcessor.selectObject(e, this.transformControls, this.camera, this.objects);
    }

    onKeyPress(e) {
        this.transformControls.setMode(e);
    }

}

export default SceneManager;