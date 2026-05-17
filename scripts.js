function enviarWhats(event) {
    
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '5583987940269';
    
    const texto = `Me chamo ${nome} e preciso dos seus serviços. ${mensagem}`;
    
    const msgFormatada = encodeURIComponent(texto);
    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;
    
    window.open(url, '_blank');
}

document.getElementById('copyright').innerHTML = `&copy ${new Date().getFullYear()} Pedro Lucas. Todos os Direitos Reservados.`;