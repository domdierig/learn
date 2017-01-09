let homeComponent = Vue.component("home-component", {
    data: {
        message: "this is the vue home component"
    },
    template: require("../views/home.html")
});