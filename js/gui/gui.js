import * as dat from 'dat.gui';

class GUI {
    constructor() {
        this.gui = new dat.GUI();
        this.folders = {};
    }
    addFolder(name, object) {
        const f = this.gui.addFolder(name);
        f.add(object.rotation, 'x', 0, Math.PI * 2);
        f.add(object.rotation, 'y', 0, Math.PI * 2);
        f.add(object.rotation, 'z', 0, Math.PI * 2);
        this.folders[f.name] = f;
    }

    openFolder(folder) {
        this.folders[folder].open();
    }
}