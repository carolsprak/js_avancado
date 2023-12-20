const nomes= ["Ana","Bianca","Diego","Mateus"];

nomes.forEach(exibeNome);

function exibeNome(nome) {
    console.log(nome);
}

function exibeMensagem(mensagem, callback) {
    console.log(mensagem);
    callback();
}

exibeMensagem('Primeira mensagem exibida', function() {
    console.log('Segunda mensagem exibida');
});