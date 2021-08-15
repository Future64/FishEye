import { createDomElement, closeWindow, launch, pathMediasPhotographer } from './tools.js'
import { enableBodyScroll, disableBodyScroll } from './body-scroll-lock.js'

/**
 * @property {HTMLElement} element
 * @property {string[]} images Chemins des images de la lightbox
 * @property {string} url Image actuellement affichée
 **/
export class Lightbox {

    /**
     * @param {string} url URL de l'image
     * @param {string[]} images Chemins des images de la lightbox
     */
    constructor(url, images) {
        this.lightboxMain = document.body.querySelector(".lightbox-main")
        this.element = this.buildDOM(url)
        this.images = images
        this.loadImage(url)
        this.onKeyUp = this.onKeyUp.bind(this)
        this.lightboxMain.appendChild(this.element)
        disableBodyScroll(this.element)
        document.addEventListener('keyup', this.onKeyUp)
    }

    static init() {
        const lightboxMain = document.body.querySelector(".lightbox-main")
        const links = Array.from(document.querySelectorAll('img[src$=".jpg"], video[src$=".mp4"]'))
        const gallery = links.map(link => link.getAttribute('src'))
        const totalPage = document.querySelectorAll(".lightboxPage")
        links.forEach(link => link.addEventListener('click', e => {
            e.preventDefault()
            if (lightboxMain.innerHTML === "") {
                new Lightbox(e.currentTarget.getAttribute('src'), gallery)
                console.log("Crée une nouvelle LightBox");
            } else {
                lightboxMain.removeChild(totalPage)
                console.log("A supprimer");
            }
        }))
    }


    /**
     * @param {string} url URL de l'image
     */
    loadImage(url) {
        this.url = null
        const image = new Image()
        const container = this.element.querySelector('.lightboxImgContainer')
        this.lightboxMain.style.display = "block"
        container.innerHTML = ''
        image.onload = () => {
            container.append(image)
            this.url = url
        }
        image.src = url
    }

    /**
     * @param {KeyboardEvent} e 
     */
    onKeyUp(e) {
        if (e.key === 'Escape') {
            this.close(e)
        } else if (e.key === 'ArrowLeft') {
            this.prev(e)
        } else if (e.key === 'ArrowRight') {
            this.next(e)
        }
    }

    /**
     * Ferme la ligthbox
     * @param {MouseEvent|KeyboardEvent} e 
     */
    close(e) {
        e.preventDefault()
            // const totalPage = document.querySelectorAll(".lightboxPage")
        enableBodyScroll(this.element)
        window.setTimeout(() => {
            this.lightboxMain.style.display = "none"
                // this.lightboxMain.remove(this.element)
        }, 500)
        document.removeEventListener('keyup', this.onKeyUp)
    }

    /**
     * @param {MouseEvent|KeyboardEvent} e 
     */
    next(e) {
        e.preventDefault()
        console.log(this.url)
        let i = this.images.findIndex(image => image === this.url)
        if (i === this.images.length - 1) {
            i = -1
        }
        this.loadImage(this.images[i + 1])
    }

    /**
     * @param {MouseEvent|KeyboardEvent} e 
     */
    prev(e) {
        e.preventDefault()
        console.log(this.url)
        let i = this.images.findIndex(image => image === this.url)
        if (i === 0) {
            i = this.images.length
        }
        this.loadImage(this.images[i - 1])
    }

    /**
     * @param {string} url URL de l'image
     * @return {HTMLElement}
     */
    buildDOM(url) {
        const dom = document.createElement('div')
        dom.classList.add('lightboxPage')
        dom.innerHTML = `<div class="lightboxContainer">
                            <i class="fas fa-chevron-left btnLightbox"></i>
                            <div class="lightboxImgContainer">
                            <img class="lightboxImg" src="${url}">
                            </div>
                            <i class="fas fa-chevron-right btnLightbox"></i>
                            <i class="fas fa-times lightboxClose"></i>
                            <div class="lightboxTitle"></div>
                        </div>`
        dom.querySelector('.lightboxClose').addEventListener('click', this.close.bind(this))
        dom.querySelector('.fas.fa-chevron-right').addEventListener('click', this.next.bind(this))
        dom.querySelector('.fas.fa-chevron-left').addEventListener('click', this.prev.bind(this))
        return dom
    }

}




























// // Fonction qui créer et affiche la lightbox dans la page photographe
// export const createLightbox = (data, mainPhotograph, urlImage, urlVideo, mediaLink) => {

//     const btnLightbox = document.querySelectorAll('.btnLightbox');

//     const lightboxPage = createDomElement("lightboxPage", "div")
//     const lightboxContainer = createDomElement("lightboxContainer", "div")
//     const lightboxImg = createDomElement("lightboxImg", "img")
//     const lightboxVideo = createDomElement("lightboxImg", "video")
//     const lightboxPreviousBtn = createDomElement("fas", "i")
//     const lightboxNextBtn = createDomElement("fas", "i")
//     const lightboxClose = createDomElement("fas", "i")
//     const lightboxTitle = createDomElement("lightboxTitle", "div")

//     // Recupère les sources des medias puis les stocks dans un tableau 
//     // trié pour ne pas avoir de doublons
//     const links = Array.from(document.querySelectorAll('video[src$=".mp4"], img[src$=".jpg"]'))
//     const gallery = links.map(link => link.getAttribute('src'))
//     let galleryFiltered = [...new Set(gallery)]
//     console.log(galleryFiltered)

//     let position = galleryFiltered.findIndex(item => item === urlImage || item === urlVideo)
//     let pathMediaLightbox = ""


//     lightboxPreviousBtn.classList.add("fa-chevron-left")
//     lightboxPreviousBtn.classList.add("btnLightbox")
//     lightboxNextBtn.classList.add("fa-chevron-right")
//     lightboxNextBtn.classList.add("btnLightbox")
//     lightboxClose.classList.add("fa-times");
//     lightboxClose.classList.add("lightboxClose");

//     lightboxPage.style.display = "none"


//     // Events -------------------------------------
//     mediaLink.addEventListener("click", () => {
//         launch(lightboxPage)
//     })

//     lightboxClose.addEventListener("click", () => {
//         closeWindow(lightboxPage)
//     })

//     lightboxPreviousBtn.addEventListener("click", () => {
//         prev()
//     })

//     lightboxNextBtn.addEventListener("click", () => {
//         next()
//     })

//     lightboxImg.setAttribute("src", urlImage)
//     lightboxVideo.setAttribute("src", urlVideo)
//     lightboxVideo.setAttribute("type", "video/mp4")
//     lightboxVideo.controls = true

//     // Attacher les éléments entre eux dans le Dom 
//     mainPhotograph.append(lightboxPage)
//     lightboxPage.append(lightboxContainer)
//     lightboxContainer.append(lightboxPreviousBtn)
//     lightboxContainer.append(lightboxImg)

//     if (data !== undefined) {
//         lightboxImg.replaceWith(lightboxVideo)
//     }

//     // lightboxContainer.append(lightboxVideo)
//     lightboxContainer.append(lightboxNextBtn)
//     lightboxContainer.append(lightboxClose)
//     lightboxContainer.append(lightboxTitle)

//     /*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/
//     //               FONCTION
//     /*®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®®*/

//     const next = () => {
//         // e.prenventDefault()
//         console.log(pathMediaLightbox)
//         galleryFiltered[position + 1]
//         pathMediaLightbox = galleryFiltered[position + 1]
//         console.log(pathMediaLightbox)
//     }

//     const prev = () => {
//         // e.prenventDefault()
//         console.log(pathMediaLightbox)
//         galleryFiltered[position - 1]
//         pathMediaLightbox = galleryFiltered[position - 1]
//         console.log(pathMediaLightbox)
//     }

// }