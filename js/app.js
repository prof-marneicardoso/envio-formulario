

const formulario = document.getElementById('formulario');
const mensagem = document.getElementById('mensagem');

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

    mensagem.innerHTML = "Por favor, aguarde..."

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
});



/*
const mensagem = document.querySelector('#mensagem');
const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", formSubmit);

function formSubmit(evento) {
    evento.preventDefault();

    const formData = new FormData(evento.target);

    fetch("https://getform.io/f/anlenqda", {
        method: "POST",
        body: formData,
        headers: {
            "Accept": "application/json",
        },
    })
    .then(response => {
        console.log(response);
    })
    .catch(error => console.log(error));
}
    */