import SceneManager from './scene/SceneManager';
import '../style.css';
import * as THREE from 'three';
import * as OBJS from './meshes/primitives';

const canvas = document.getElementById('canvas');
const sceneManager = new SceneManager(canvas);


document.addEventListener('mousedown', (e) => {
    sceneManager.onMouseClick(e);
});
document.addEventListener('resize', sceneManager.onWindowResize());
// add objects
var cube = new OBJS.Cube();
var grid = new THREE.GridHelper(100, 30);

sceneManager.addObject(cube);
sceneManager.scene.add(grid);

function animate() {
    requestAnimationFrame(animate);
    sceneManager.update();
}

animate();
