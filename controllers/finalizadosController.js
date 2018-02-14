module.exports = function (app){
     
    var finalizadoController = {
        finalizadoPage: function (req, res){
            //renderiza view de finalizados
            res.render('./finalizados', {title:'Esta é a Página de Testes Finalizados'});
        }
    }
    return finalizadoController;
}

