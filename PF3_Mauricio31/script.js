const calcular = document.getElementById('calcular');
console.log(calcular)

function calculadora_de_financas() {
    const nome = document.getElementById('nome').value;
    const valor = document.getElementById('valor').value;
    const juros = document.getElementById('juros').value;
    const parcelas = document.getElementById('parcelas').value;
    const resultado = document.getElementById('resultado');

    if (
        nome !== '' &&
        valor !== '' &&
        juros !== '' &&
        parcelas !== ''
    ) {
        const valorPoupado = (
            valor *
            (((1 + juros / 100) ** parcelas - 1) / (juros / 100))

        );

        resultado.textContent = `${nome},Se você aplicar R$ ${valor}, à taxa de juros de ${juros}% ao mês, durante ${parcelas} meses,acumulará uma poupança de R$ ${valorPoupado}`;

    } else {

        resultado.textContent =
            'Para o seu valor poupado, favor preencher todos os campos.';

    }
}

calcular.addEventListener('click', calculadora_de_financas);