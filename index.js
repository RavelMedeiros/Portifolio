let tamanhoTela = window.innerWidth
let nomePagina = window.location.pathname

if (tamanhoTela <= 1200) {
    let titulo = document.querySelector('.apresentacao__conteudo__titulo')
    let ImagemCelular = document.createElement('img')

    if (nomePagina == '/Portifolio/' || '/Portifolio/index.html') {
        ImagemCelular.src = "./assets/fotoPerfil.png"
        ImagemCelular.alt = "Foto de perfil"
        ImagemCelular.classList.add("apresentacao__imagem")
        titulo.appendChild(ImagemCelular)
    }
} else {
    let titulo = document.querySelector('.apresentacao')
    let ImagemPc = document.createElement('img')

    ImagemPc.src = "./assets/fotoPerfil.png"
    ImagemPc.alt = "Foto de perfil"
    ImagemPc.classList.add("apresentacao__imagem")
    titulo.appendChild(ImagemPc)
}