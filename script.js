document.getElementById('form-contato').addEventListener('submit', function (event) {
    event.preventDefault();

    const numeroLoja = '5511958227153';

    const modelo = document.getElementById('modelo-veiculo').value;
    const anoVeiculo = document.getElementById('ano-veiculo').value;
    const nomeCliente = document.getElementById('nome-cliente').value;
    const cidadeCliente = document.getElementById('cidade-cliente').value;

    const textoFormatado = `Olá, me chamo ${nomeCliente}, estou à procura do carro modelo: ${modelo}, ano: ${anoVeiculo}. Sou de ${cidadeCliente}.`;

    const textoCodificado = encodeURIComponent(textoFormatado);

    const urlWhatsApp = `https://wa.me/${numeroLoja}?text=${textoCodificado}`;

    window.open(urlWhatsApp, '_blank');
});