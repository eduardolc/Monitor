module.exports = function (app){

    var finish = app.controllers.finalizadosController;
    //se a url for /finalizados ele chama a função finalizadoPage 
    app.get('/finalizados', finish.finalizadoPage);
}

