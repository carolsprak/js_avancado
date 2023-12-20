const { Pessoa } = require('./pessoa'); 
 
 function nomeCompleto1( ) { 
    let pessoa = new Pessoa(); 
    console.log(pessoa.nome() + " " +  pessoa.sobrenome());

}

nomeCompleto1();


