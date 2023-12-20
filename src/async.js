let pessoa= {nome: "Ana",sobrenome: "Beatriz",cpf: "00297415845"};

console.log(pessoa.nome);

// Timeout e Intervalos
function printAsync() {
    console.log("Teste");
};

function printAsync2() {
    setTimeout((printAsync) => {
        console.log("Texto teste")
    }, 2000);
};

printAsync();
printAsync2();

let myGreeting = setTimeout(function() {
    console.log("Hello World!");
  }, 1000)

  
setTimeout( 
    () => {console.log("Oi, depois de 3 segundos");
    },
    3 * 1000
);


function funcao1(){
    setTimeout( function(){console.log('Oi após 5 segundos');
    }, 5000 );
}

function funcao2(){console.log('Olá');
}

funcao1();
funcao2()
 