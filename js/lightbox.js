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

    lightboxImg.setAttribute("src", urlImage)
    lightboxVideo.setAttribute("src", urlVideo)
    lightboxVideo.setAttribute("type", "video/mp4")
    lightboxVideo.controls = true

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
}