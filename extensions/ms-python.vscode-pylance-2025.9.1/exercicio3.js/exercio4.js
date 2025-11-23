<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício Seletores</title>
    <style>
        .paragrafo {
            transition: all 0.5s;
        }
    </style>
</head>
<body>
    <h1 id="titulo-principal">Título Original</h1>

    <button>Clique com o novo texto</button>

    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>

    <p>Lorem ipsum dolor sit amet 1</p>
    <p>Lorem ipsum dolor sit amet 2</p>
    <p>Lorem ipsum dolor sit amet 3</p>

    <script>
        // Função que muda o título após 2 segundos
        function mudaTitulo(novoTitulo) {
            const titulo = document.getElementById('titulo-principal')
            titulo.innerText = novoTitulo
        }

        setTimeout(() => mudaTitulo('Oba! Alterei o título!'), 2000)

        // Selecionando elementos
        const botao = document.getElementsByTagName('button')[0]
        const listaDeLi = document.getElementsByTagName('li')
        const listaDeParagrafos = document.getElementsByTagName('p')
        const listaDeCores = ['#060000', '#05f7ab']

        // Evento de clique no botão
        botao.addEventListener('click', () => {
            botao.innerText = 'Clique com o novo texto'
            botao.style.fontSize = '60px'
        })

        // Pintando os <li> de cores alternadas
        for (let i = 0; i < listaDeLi.length; i++) {
            listaDeLi[i].style.color = listaDeCores[i % 2]
        }

        // Adicionando classe aos parágrafos
        for (let paragrafo of listaDeParagrafos) {
            paragrafo.classList.add('paragrafo')
        }
    </script>
</body>
</html>