<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">

    </head>
    <body>

        <section id="lugar"></section>
        <script>
            window.alert("Começando");
            let nome = prompt("Digite seu nome:");
            let idade = prompt("Digite sua idade:");
            let gastoDiario = parseFloat(prompt("Digite o gasto diário com locomoção (em R$):"));
            let tempoEstudo = parseFloat(prompt("Digite o tempo semanal de estudo extraclasse (em horas):"));
            let tempoLivre = parseFloat(prompt("Digite o tempo semanal livre (em horas):"));

            
            let tempoTotal = tempoLivre + tempoEstudo;
            let relacaoLivre = (tempoLivre * 100 / tempoTotal);

            var lugar;
            lugar = document.getElementById("lugar");
            lugar.innerHTML += "<p>Nome: " + nome + "</p>";
            lugar.innerHTML += "<p>idade:" + idade + "</p>";
            lugar.innerHTML += "<p>gastoDiario:" + gastoDiario + "</p>";
            lugar.innerHTML += "<p>tempoEstudo:" + tempoEstudo + "</p>";
            lugar.innerHTML += "<p>tempoLivre:" + tempoLivre + "</p>";
            lugar.innerHTML += "<p>tempototal:" + tempoTotal + "</p>";
            lugar.innerHTML += "<p>relacaolivre:" + relacaoLivre.toFixed(2) + "</p>";
        </script>
    </body>
</html>
