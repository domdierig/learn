Vue.component("home-component", {
    template: require("./../views/home.component.html"),
    data: function() {
        let data = {
            message: "this is the vue home component"
        }
        return data;
    }    
});