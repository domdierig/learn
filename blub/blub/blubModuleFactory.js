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