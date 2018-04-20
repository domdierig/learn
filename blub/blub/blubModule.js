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

            this.jsObj[updateProperty + "_f"] = () => {
                ele.innerHTML = this.jsObj[updateProperty];
            }
        }
    }
}