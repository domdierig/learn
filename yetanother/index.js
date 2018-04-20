let ya = new YA();

class HelloWorld {
    constructor() {
        this.view = '<div b-update="helloworld"></div><button class="button"></button>';
        this.helloworld = "HelloWorld"; 
    }
}

let module = new HelloWorld();

ya.add(module);

setTimeout(function() {
    module.helloworld = "HelloDominic";
}, 2000)