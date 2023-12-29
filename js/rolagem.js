var header = document.querySelector('#header');

const linkInicial = document.querySelector('#inicial_link');
linkInicial.addEventListener('click', RolarParaInicial);

function RolarParaInicial(e){
    // Obtém a posição (coordenada Y) da seção de destino
    const containerInicial = document.querySelector('#inicial_container');
    const posicao_inicial = containerInicial.offsetTop;

    // Faz a animação de rolagem suave até a seção de destino
    window.scrollTo({
        top: posicao_inicial,
        behavior: 'smooth' // Faz a rolagem suave
    });

    header.style.backgroundImage = 'linear-gradient(100deg, #6C63FF, #6b63ffc0)';
}


const linkServicos = document.querySelector('#nossos_servicos_link');
linkServicos.addEventListener('click', RolarParaServicos)

function RolarParaServicos(e){
    const containerServicos = document.querySelector('#nossos_servicos_container');
    const posicao_servicos = containerServicos.offsetTop;

    window.scrollTo({
        top: posicao_servicos,
        behavior: 'smooth'
    });

    header.style.backgroundImage = 'linear-gradient(100deg, #222041, #060613c0)';
}


const linkSobre = document.querySelector('#sobre_nos_link');
linkSobre.addEventListener('click', RolarParaSobre);

function RolarParaSobre(e){
    const containerSobre = document.querySelector('#sobre_nos_container');
    const posicaoSobre = containerSobre.offsetTop;

    window.scrollTo({
        top: posicaoSobre,
        behavior: 'smooth'
    })

    header.style.backgroundImage = 'linear-gradient(100deg, #6C63FF, #6b63ffc0)';
}


const linkContato = document.querySelector('#entre_contato_link');
linkContato.addEventListener('click', RolarParaContato);

function RolarParaContato(e){
    const containerContato = document.querySelector('#entre_contato_container');
    const posicaoContato = containerContato.offsetTop;

    window.scrollTo({
        top: posicaoContato,
        behavior: 'smooth'
    })

    header.style.backgroundImage = 'linear-gradient(100deg, #222041, #060613c0)';
}
