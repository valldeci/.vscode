<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Sistema de Curtidas</title>
</head>
<body>

    <h2>Sistema de Curtidas</h2>

    <input type="text" id="nome" placeholder="Digite seu nome">
    <button onclick="curtir()">Curtir</button>

    <p id="mensagem">Ninguém curtiu</p>

    <script>
        const curtidas = [];

        function curtir() {
            const nome = document.getElementById("nome").value.trim();

            if (nome === "") return; // ignora vazio
            if (!curtidas.includes(nome)) {
                curtidas.push(nome);
            }

            atualizarMensagem();
            document.getElementById("nome").value = "";
        }

        function atualizarMensagem() {
            const msg = document.getElementById("mensagem");
            const n = curtidas.length;

            if (n === 0) {
                msg.textContent = "Ninguém curtiu";
            } 
            else if (n === 1) {
                msg.textContent = `${curtidas[0]} curtiu`;
            }
            else if (n === 2) {
                msg.textContent = `${curtidas[0]} e ${curtidas[1]} curtiram`;
            }
            else {
                msg.textContent = `${curtidas[0]}, ${curtidas[1]} e mais ${n - 2} pessoas curtiram`;
            }
        }
    </script>

</body>
</html>
