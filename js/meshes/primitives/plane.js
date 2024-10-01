import Mesh from '../mesh';
import { PlaneGeometry } from 'three';

class Plane extends Mesh {
    constructor(width = 1, height = 1) {
        super(new PlaneGeometry(width, height));
    }
}

export default Plane;