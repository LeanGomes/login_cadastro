
//Usuários cadastrados (ARRAY Object).
const usuarios = [
    {nome : 'leco', senha : '12345', email : 'leco@gmail.com'},
    {nome : 'analuiza', senha : '3698', email : 'ana@gmail.com'}
];

///LOGIN

document.addEventListener('DOMContentLoaded', function() {
    // Código para o formulário de login
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();

    // Obtendo os valores inseridos pelo usuário
    let usuario = document.getElementById('nome').value;
    let senha = document.getElementById('senha').value;

    // Utilizando o método FIND para verificar se o usuário e senha inseridos estão cadastrados
    let cadastro = usuarios.find(cadastro => cadastro.nome === usuario && cadastro.senha === senha);

    if(cadastro){
        alert("Bem Vindo!!!"); // Usuário Cadastrado.
        window.location.href = 'home.html'; // Direcionar para outra página
    } else {
        alert("Usuário não cadastrado"); // Usuário não Cadastrado.
    }
});

    });

    ///CADASTRO

    // Código para o formulário de cadastro
    document.getElementById('formCadastro').addEventListener('submit', function(event) {
        event.preventDefault();
         // Obtendo os valores inseridos pelo usuário
    let nomeCadastro = document.getElementById('nomeCadastro').value;
    let senhaCadastro = document.getElementById('senhaCadastro').value;
    let emailCadastro = document.getElementById('emailCadastro').value;
    let emailConf = document.getElementById('emailConf').value;
    // Verificando se os emails inseridos são iguais
    if(emailCadastro !== emailConf) {
        alert('Os emails não coincidem');
        return; // Saindo da função se os emails não coincidirem
    }
    // Utilizando o método FIND para verificar se o usuário já tem cadastro
    let usuarioExistente = usuarios.find(usuario => usuario.nome === nomeCadastro);

    if(usuarioExistente){
        alert('Usuario já cadastrado!');
    } else {
        // Utilizando o método FIND para verificar se o email do usuário já está cadastrado
        let emailCadastrado = usuarios.find(usuario => usuario.email === emailCadastro);
       
        if(emailCadastrado){
            alert('Email já cadastrado');
        } else {
            
            
            usuarios.push({nome: nomeCadastro, senha: senhaCadastro, email: emailCadastro});
            alert('Cadastro Realizado');
        }
        document.getElementById('nomeCadastro').value = '';
        document.getElementById('senhaCadastro').value = '';
        window.location.href = 'login_Cadastro_JS_Simples.html';
    }
});
console.log(usuarios)
        
   
 
