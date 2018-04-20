let blub = new Blub();

class HelloWorld {
    constructor() {
        this.view = '<div b-update="helloworld"></div>';
        this.helloworld = "HelloWorld"; 
    }
}

let module = new HelloWorld();

blub.add(module);

setTimeout(function() {
    module.helloworld = "HelloDominic";
}, 2000)