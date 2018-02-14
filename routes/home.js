module.exports = function(app){

    var home = app.controllers.home;
    //passa a url da page e chama a função que esta dentro de home Controllers
    app.get('/', home.index);
}