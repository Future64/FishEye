import { createDomElement, closeWindow, launch } from './tools.js'

// Fonction qui créer et affiche la lightbox dans la page photographe
export const createLightbox = (data, mainPhotograph, urlImage, urlVideo, mediaLink) => {

    const btnLightbox = document.querySelectorAll('.btnLightbox');

    const lightboxPage = createDomElement("lightboxPage", "div")
    const lightboxContainer = createDomElement("lightboxContainer", "div")
    const lightboxImg = createDomElement("lightboxImg", "img")
    const lightboxVideo = createDomElement("lightboxImg", "video")
    const lightboxPreviousBtn = createDomElement("fas", "i")
    const lightboxNextBtn = createDomElement("fas", "i")
    const lightboxClose = createDomElement("fas", "i")
    const lightboxTitle = createDomElement("lightboxTitle", "div")

    // Recupère les sources des medias puis les stocks dans un tableau 
    // trié pour ne pas avoir de doublons
    const links = Array.from(document.querySelectorAll('video[src$=".mp4"], img[src$=".jpg"]'))
    const gallery = links.map(link => link.getAttribute('src'))
    let galleryFiltered = [...new Set(gallery)]
    console.log(galleryFiltered)

    let position = galleryFiltered.findIndex(item => item === urlImage || item === urlVideo)
    let pathMediaLightbox = ""



    lightboxPreviousBtn.classList.add("fa-chevron-left")
    lightboxPreviousBtn.classList.add("btnLightbox")
    lightboxNextBtn.classList.add("fa-chevron-right")
    lightboxNextBtn.classList.add("btnLightbox")
    lightboxClose.classList.add("fa-times");
    lightboxClose.classList.add("lightboxClose");

    lightboxPage.style.display = "none"


    // Events -------------------------------------
    mediaLink.addEventListener("click", () => {
        launch(lightboxPage)
    })

    lightboxClose.addEventListener("click", () => {
        closeWindow(lightboxPage)
    })

    lightboxPreviousBtn.addEventListener("click", () => {
        prev()
    })

    lightboxNextBtn.addEventListener("click", () => {
        next()
    })

    lightboxImg.setAttribute("src", urlImage)
    lightboxVideo.setAttribute("src", urlVideo)
    lightboxVideo.setAttribute("type", "video/mp4")
    lightboxVideo.controls = true

    // Attacher les éléments entre eux dans le Dom 
    mainPhotograph.append(lightboxPage)
    lightboxPage.append(lightboxContainer)
    lightboxContainer.append(lightboxPreviousBtn)
    lightboxContainer.append(lightboxImg)

    if (data !== undefined) {
        lightboxImg.replaceWith(lightboxVideo)
    }

    // lightboxContainer.append(lightboxVideo)
    lightboxContainer.append(lightboxNextBtn)
    lightboxContainer.append(lightboxClose)
    lightboxContainer.append(lightboxTitle)

    /*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/
    //               FONCTION
    /*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

    const next = () => {
        // e.prenventDefault()
        console.log(pathMediaLightbox)
        galleryFiltered[position + 1]
        pathMediaLightbox = galleryFiltered[position + 1]
        console.log(pathMediaLightbox)
    }

    const prev = () => {
        // e.prenventDefault()
        console.log(pathMediaLightbox)
        galleryFiltered[position - 1]
        pathMediaLightbox = galleryFiltered[position - 1]
        console.log(pathMediaLightbox)
    }

}