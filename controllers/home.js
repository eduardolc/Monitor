module.exports =  function(app){

    var HomerController = {
        index: function(req, res){
            res.render('./index', {title: 'Monitor Automação Testes de Software Procenge'});
        }
    }

    return HomerController;
}