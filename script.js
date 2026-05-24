const menuMobile = document.getElementById("menu-mobile");
const navList = document.getElementById("nav-list");
const navLinks = document.querySelectorAll(".nav-link");

menuMobile.addEventListener("click",()=>{
    navList.classList.toggle("ativo");
    menuMobile.classList.toggle("ativo");
});

navLinks.forEach((link)=>{
    link.addEventListener("click",()=>{
        navList.classList.remove("ativo");
        menuMobile.classList.remove("ativo");
    });
});

const anoAtual = document.getElementById("ano-atual");
anoAtual.textContent = new Date().getFullYear();

const form = document.getElementById("form");
const statusMensagem = document.getElementById("mensagem-status");

form.addEventListener("submit",(event)=>{
    event.preventDefault();

    const nome = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("message").value.trim();

    if(!nome || !email || !mensagem){
        statusMensagem.textContent = "Preencher todos os campos.";
        return;
    }

    const telefone = "5583988510269";
    const texto = `Olá, me chamo ${nome}. Meu email é: ${email}  
    
    ${mensagem}`;

    const mensagemFormatada = encodeURIComponent(texto);
    const url = `https://wa.me/${telefone}?text=${mensagemFormatada}`;
    statusMensagem.textContent = "Abrindo Whatsapp...";
    window.open(url, "_blank");

})