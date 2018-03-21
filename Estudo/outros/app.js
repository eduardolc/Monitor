
var funcao = require('./callback');

console.log('Começando a execução do Teste');
funcao(function(string){
    console.log(string);
    
});

funcao(function(numero){
   console.log(numero);
});

console.log('Fim da execução');