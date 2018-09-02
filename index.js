let botao = document.querySelector("#meubotao");
botao.addEventListener('click', function (){
    alert("Essa notícia é falsa! Não a compartilhe. Busque sempre a informação verdadeira!");
    })

let login = document.querySelector("#botao");
login.addEventListener('click', function (){
    let nome = prompt("Digite seu nome!");
    let email = prompt("Digite sua email!");
    alert("Obrigado " +nome +"! Espero que você encontre o que está procurando.")
    })
    