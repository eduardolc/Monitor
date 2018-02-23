var mysql = require('mysql');



/*function CriarConect(){
    var con = mysql.createConnection({
        host: "10.50.62.154",
        user: "root",
        password: "teste",
        database: "reef",
        port: 3306
        })

    con.connect(function(err){
    if (err) throw err;
    console.log("Connected!");
    });
}


function executeQuery(conect, query){
    conect.connect(function(err){
        if (err) throw err;
        conect.query(query, function(err, result, fields){
            if (err) throw err;
            //console.log(result[0].id);
        });
        conect.end();
    return result;
});
}
//var con = mysql.createConnection({
  //  host: "10.50.62.154",
   // user: "root",
   // password: "teste",
  //  database: "reef",
  //  port: 3306
   // })

//con.connect(function(err){
//    if (err) throw err;
//    console.log("Connected!");
//});

/*con.connect(function(err){
    if (err) throw err;
    con.query("select * from reef.teste_historico th where th.resultado = ''", function(err, result, fields){
        if (err) throw err;
        console.log(result[0].id);
    });
    con.end();
    console.log('Terminou');
});
*/

//module.exports = {CriarConect, executeQuery};