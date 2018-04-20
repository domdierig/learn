class YAModuleFactory {
    constructor() {

    }

    createYAModule(jsObj, htmlElement) {
        for(let key in jsObj) {
            if(key !== "view") {
                let value = jsObj[key];

                Object.defineProperty(jsObj, key, {
                    get: function() {
                        return this["_" + key]
                    },
                    set: function(input) {
                        this["_" + key] = input;
                        if(this[key + "_f"]) {
                            this[key + "_f"]()
                        }
                    }
                });

                jsObj[key] = value;
            }            
        }

        return new YAModule(jsObj.constructor.name, htmlElement, jsObj);        
    }
}
class YAModuleManager {
    constructor() {
        this.moduleFactory = new YAModuleFactory();
        this.modules = [];
    }

    addModule(jsObj) {        
        let htmlElements = document.getElementsByTagName(jsObj.constructor.name);        
        for(let ele of htmlElements) {            
            let newYAModule = this.moduleFactory.createYAModule(jsObj, ele);

            newYAModule.setViewToDom();
            this.modules.push(newYAModule);
        }        
    }
}
const regex = /{{[a-zA-Z ]+}}/g;

class YAModule {
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
        let updates = this.htmlElement.querySelectorAll("[ya-update]");
        let yam = this;
        for (let ele of updates) {
            let updateProperty = ele.getAttribute("ya-update");
            ele.innerText = this.jsObj[updateProperty];

            this.jsObj[updateProperty + "_f"] = () => {
                ele.innerText = this.jsObj[updateProperty];
            }
        }
        
        let clicks = this.htmlElement.querySelectorAll("[ya-click]");
        for (let ele of clicks) {
            let clickProperty = ele.getAttribute("ya-click");
            
            ele.onclick = function() { yam.jsObj[clickProperty]() };
        }
    }
}
class YA {
    constructor() {
        this.moduleManager = new YAModuleManager();
    }

    add(jsObj) {
        this.moduleManager.addModule(jsObj);
    }
}