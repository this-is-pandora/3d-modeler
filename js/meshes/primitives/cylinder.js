import Mesh from '../mesh';
import { CylinderGeometry } from 'three';

class Cylinder extends Mesh {
    constructor(radiusTop = 1, radiusBot = 1, height = 1) {
        super(new CylinderGeometry(radiusTop, radiusBot, height));
    }
}

export default Cylinder;