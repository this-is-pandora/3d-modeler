import Mesh from '../mesh';
import { TetrahedronGeometry } from 'three';

class Pyramid extends Mesh {
    constructor() {
        super(new TetrahedronGeometry(10, 0));
    }
}

export default Pyramid;