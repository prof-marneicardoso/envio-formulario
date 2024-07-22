
const formulario = document.getElementById('formulario');
const statusEnvio = document.getElementById('statusEnvio');

// console.log(formulario); // LOG

// Ao clicar em enviar o formulário
formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    // Guarda os dados do formulário
    const formData = new FormData(formulario);
    // console.log(formData);   // LOG

    // Converte para objeto
    const dados = Object.fromEntries(formData);
    // console.log(dados);  // LOG

    statusEnvio.innerHTML = "Por favor, aguarde..."

    /*
    // Envia os dados do formulário para a API
    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(async (response) => {
        console.log('then >');  // LOG

        let data = await response.json();
        if (response.status == 200) {
            mensagem.innerHTML = "Mensagem enviada!";
            console.log('IF');  // LOG

            // Esconde a mensagem, depois de N segundos
            setTimeout(() => {
                mensagem.style.display = "none";
            }, 3000);

        } else {
            console.log(response);  // LOG
            console.log('IF');  // LOG

            mensagem.innerHTML = 'Ops, algo deu errado! Verifique o e-mail informado';
        }
    })
    */
});