class Blub {
    constructor() {
        this.moduleManager = new BlubModuleManager();
        this.moduleFactory = new BlubModuleFactory();
    }

    add(jsObj) {
        let htmlElements = document.getElementsByTagName(moduleName);
        
        for(let ele of htmlElements) {
            let newModule = this.moduleFactory(jsObj, ele);
            this.moduleManager.addModule(newModule);            
        }
    }
}