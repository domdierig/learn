class Controller {
    constructor() {
        this.dataProvider = new DataProvider();
    }

    click() {
        this.dataProvider.getData(function(data) {
            this.printData(data);
        });
    }

    printData(data) {
        console.log(data);
    }
}

class DataProvider {
    constructor() {

    }
    
    getData(callback) {
        let data = "Hello World";
        callback(data);
    }
}

let c = new Controller();
c.click();