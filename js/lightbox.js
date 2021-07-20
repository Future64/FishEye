import { createDomElement, closeWindow, launch, pathMediasPhotographer } from './tools.js'


export class Lightbox {

    static init() {
        // je  selectionne tous les liens qui menent vers des images
        const links = Array.from(document.querySelectorAll('video[src$=".mp4"], img[src$=".jpg"]'))
            // on parcour l'ensemble de nos liens
            .forEach(link => link.addEventListener('click', e => {
                e.preventDefault()
                new Lightbox(e.currentTarget.getAttribute('src'))
            }))


    }

    /**
     * @param {string} url URL de l'image
     */
    constructor(url) {
        const element = this.buildDOM(url)
        document.body.appendChild(element)
    }

    /**
     * 
     * @param {string} url URL de l'image
     * @return {HTMLElement} 
     */
    buildDOM(url) {
        const dom = document.createElement('div')
        dom.classList.add('lightbox')

        dom.innerHTML = `<div class="lightboxPage">
        <div class="lightboxContainer">
        <i class="fas fa-chevron-left btnLightbox"></i>
        <img class="lightboxImg" src="${url}"></img>
        <i class="fas fa-chevron-right btnLightbox"></i>
        <i class="fas fa-times lightboxClose"></i>
        <div class="lightboxTitle"></div>
        </div>
        </div>`

        return dom
    }

    closeDom() {
        const lightboxClose = document.querySelector('lightboxClose')
        const lightboxC = document.querySelector('lightbox')
        lightboxClose.addEventListener("click", () => {
            lightboxC.remove()
        })
    }

}


























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