class BlubModuleManager {
    constructor() {
        this.moduleFactory = new BlubModuleFactory();
        this.modules = [];
    }

    addModule(jsObj) {        
        let htmlElements = document.getElementsByTagName(jsObj.constructor.name);        
        for(let ele of htmlElements) {            
            let newBlubModule = this.moduleFactory.createBlubModule(jsObj, ele);

            newBlubModule.setViewToDom();
            this.modules.push(newBlubModule);
        }        
    }
}