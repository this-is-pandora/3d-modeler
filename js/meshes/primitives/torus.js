import Mesh from '../mesh';
import { TorusGeometry } from 'three';

class Torus extends Mesh {
    constructor(radius = 1, tube = 0.4) {
        super(new TorusGeometry(radius, tube));
    }
}

export default Torus;