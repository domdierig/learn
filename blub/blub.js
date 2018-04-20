class BlubModuleFactory {
    constructor() {

    }

    createBlubModule(jsObj, htmlElement) {
        for(let key in jsObj) {
            if(key !== "view") {
                let value = jsObj[key];

                Object.defineProperty(jsObj, key, {
                    get: function() {
                        return this["_" + key]
                    },
                    set: function(input) {
                        this["_" + key] = input;
                        if(this[key + "Handle"]) {
                            this[key + "Handle"]()
                        }
                    }
                });

                jsObj[key] = value;
            }            
        }

        return new BlubModule(jsObj.constructor.name, htmlElement, jsObj);        
    }
}
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
const regex = /{{[a-zA-Z ]+}}/g;

class BlubModule {
    constructor(name, htmlElement, jsObj) {
        this.name = name;
        this.htmlElement = htmlElement;
        this.jsObj = jsObj;
    }

    setViewToDom() {
        for (let key in this.jsObj) {
            if (key !== "view") {
                this.jsObj.view = this.jsObj.view.replace(new RegExp("{{\\s?" + key + "\\s?}}"), this.jsObj[key]);
            }
        }        
        this.htmlElement.innerHTML = this.jsObj.view;
        this.checkForDirectories()
    }

    checkForDirectories() {
        let updates = this.htmlElement.querySelectorAll("[b-update]");
        for (let ele of updates) {
            let updateProperty = ele.getAttribute("b-update");
            ele.innerHTML = this.jsObj[updateProperty];
            
            this.jsObj[updateProperty + "Handle"] = () => {
                ele.innerHTML = this.jsObj[updateProperty];
            }
        }
    }
}
class Blub {
    constructor() {
        this.moduleManager = new BlubModuleManager();
    }

    add(jsObj) {
        this.moduleManager.addModule(jsObj);
    }
}