import Mesh from '../mesh';
import { SphereGeometry } from 'three';

class Sphere extends Mesh {
    constructor(radius = 1, widthSegment = 32, heightSegment = 16) {
        super(new SphereGeometry(radius, widthSegment, heightSegment));
    }
}

export default Sphere;