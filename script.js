function toggleMode() {
    const html = document.documentElement

    html.classList.toggle('light')


    const img = document.querySelector("#profile img")

    if (html.classList.contains('light')) {
        img.setAttribute('src', './assets/avatar-light.jpg')
        img.setAttribute('alt', "Imagem da Akko, do anime Little Witch Academia, com uma feição deprimida.")
    } else {
        img.setAttribute('src', './assets/avatar.jpg')
        img.setAttribute('alt', "Imagem da Akko, do anime Little Witch Academia, com as maõs juntas ao peito, demonstrando felicidade.")
    }
}