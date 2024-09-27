import Mesh from '../mesh';
import { BoxGeometry } from 'three';

class Cube extends Mesh {
    constructor() {
        super(new BoxGeometry(1, 1, 1));
    }
}

export default Cube;