import * as THREE from 'three';

class Mesh {

    constructor(geometry, material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })) {
        this.geometry = geometry;
        this.material = material;
        this.mesh = new THREE.Mesh(this.geometry, this.material);
    }

    getMesh() {
        return this.mesh;
    }
}

export default Mesh;