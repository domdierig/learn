class Blub {
    constructor() {
        this.moduleManager = new BlubModuleManager();
    }

    add(jsObj) {
        this.moduleManager.addModule(jsObj);
    }
}