import Mesh from '../mesh';
import { ConeGeometry } from 'three';

class Cone extends Mesh {
    constructor(radius = 1, height = 1) {
        super(new ConeGeometry(radius, height));
    }
}

export default Cone;