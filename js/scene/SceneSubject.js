/*
* a scene subject is any object in the scene: a cube, planet, model, etc.
* these are all different scene subjects 
*/
class SceneSubject {
    // subject could be a mesh, lighting object, etc.
    constructor(id, subject) {
        this.id = id;
        this.subject = subject;
    }

}