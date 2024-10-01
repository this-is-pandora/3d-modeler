import Mesh from '../mesh';
import { TetrahedronGeometry } from 'three';

class Pyramid extends Mesh {
    constructor(radius = 10, detail = 0) {
        super(new TetrahedronGeometry(radius, detail));
    }
}

export default Pyramid;