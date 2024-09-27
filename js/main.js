import SceneManager from './scene/SceneManager';
import Cube from './meshes/primitives/cube';
import '../style.css';
import * as THREE from 'three';

const canvas = document.getElementById('canvas');
const sceneManager = new SceneManager(canvas);

var cube = new Cube();
sceneManager.addObject(cube);

function animate() {
    requestAnimationFrame(animate);
    sceneManager.update();
}

animate();
