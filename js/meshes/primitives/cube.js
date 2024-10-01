import Mesh from '../mesh';
import { BoxGeometry } from 'three';

class Cube extends Mesh {
    constructor(width = 1, height = 1, depth = 1) {
        super(new BoxGeometry(width, height, depth));
    }
}

export default Cube;