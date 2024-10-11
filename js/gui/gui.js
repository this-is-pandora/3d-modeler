import * as dat from 'dat.gui';

// TODO: the GUI controller
class GUI {
    constructor() {
        this.gui = new dat.GUI();
        this.folder = null;
    }
    addFolder(name, object) {
        if (this.folder) {
            this.folder.close();
            this.folder = null;
        }
        const f = this.gui.addFolder(name);
        f.add(object.translation, 'x');
        f.add(object.translation, 'y');
        f.add(object.translation, 'z');
        f.add(object.rotation, 'x', 0, Math.PI * 2);
        f.add(object.rotation, 'y', 0, Math.PI * 2);
        f.add(object.rotation, 'z', 0, Math.PI * 2);
        f.add(object.scale, 'x', 0, Math.PI * 2);
        f.add(object.scale, 'y', 0, Math.PI * 2);
        f.add(object.scale, 'z', 0, Math.PI * 2);
        this.folder = f;
    }

    openFolder() {
        this.folder.open();
    }
    closeFolder() {
        this.folder.close();
        this.folder = null;
    }
}

export default GUI;