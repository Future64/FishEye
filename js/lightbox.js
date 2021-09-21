import { enableBodyScroll, disableBodyScroll } from './body-scroll-lock.js'

/**
 * @property {HTMLElement} element
 * @property {string[]} medias Chemins des medias de la lightbox
 * @property {string} url Media actuellement affichée
 **/
export class Lightbox {

    /**
     * @param {string} url URL du media
     * @param {string[]} medias Chemins des medias de la lightbox
     */
    constructor(url, medias) {
        this.lightboxMain = document.body.querySelector(".lightbox-main")
        this.element = this.buildDOM(url)
        this.medias = medias
        this.loadImage(url)
        this.onKeyUp = this.onKeyUp.bind(this)
        this.lightboxMain.appendChild(this.element)
        disableBodyScroll(this.element)
        document.addEventListener('keyup', this.onKeyUp)
    }

    static init() {
        let data = localStorage.getItem('data')
        data = JSON.parse(data)
        const links = Array.from(document.querySelectorAll('img[src$=".jpg"], video[src$=".mp4"]'))
        const gallery = links.map(link => link.getAttribute('src'))
        links.forEach(link => link.addEventListener('click', e => {
            e.preventDefault()
            new Lightbox(e.currentTarget.getAttribute('src'), gallery)
        }))
    }


    /**
     * @param {string} url URL de l'image
     */
    getFileExtension(url) {
        return url.substring(url.lastIndexOf('.') + 1, url.length) || url
    }


    /**
     * @param {string} url URL de l'image
     */
    loadImage(url) {
        this.url = url
        const container = this.element.querySelector('.lightboxImgContainer')
        const img = document.createElement('img')
        const video = document.createElement('video')

        container.innerHTML = ''

        if (this.getFileExtension(url) === "jpg") {
            img.classList.add('lightboxImg')
            img.setAttribute("src", url)
            container.appendChild(img)
            img.onload = () => { this.url = url }
        } else {
            video.classList.add('lightboxVideo')
            video.setAttribute("src", url)
            video.setAttribute("type", "video/mp3")
            video.controls = true
            container.appendChild(video)
            video.onload = () => { this.url = url }
        }

        this.lightboxMain.style.display = "block"

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

        enableBodyScroll(this.element)
        window.setTimeout(() => {
            const totalPage = document.querySelectorAll(".lightboxPage")
            totalPage.forEach(ligtboxPage => {
                ligtboxPage.remove()
            })
        }, 500)
        document.removeEventListener('keyup', this.onKeyUp)
    }

    /**
     * @param {MouseEvent|KeyboardEvent} e 
     */
    next(e) {
        e.preventDefault()
        let i = this.medias.findIndex(media => media === this.url)
        if (i === this.medias.length - 1) {
            i = -1
        }
        this.loadImage(this.medias[i + 1])
    }

    /**
     * @param {MouseEvent|KeyboardEvent} e 
     */
    prev(e) {
        e.preventDefault()
        let i = this.medias.findIndex(media => media === this.url)
        if (i === 0) {
            i = this.medias.length
        }
        this.loadImage(this.medias[i - 1])
    }

    /**
     * @param {string} url URL de l'image
     * @return {HTMLElement}
     */
    buildDOM(url) {
        const dom = document.createElement('div')
        dom.classList.add('lightboxPage')
        dom.innerHTML = `<div class="lightboxContainer" aria-label="image closeup view">
                            <i class="fas fa-chevron-left btnLightbox" alt="Previous image"></i>
                            <div class="lightboxImgContainer"></div>
                            <i class="fas fa-chevron-right btnLightbox" alt="Next image"></i>
                            <i class="fas fa-times lightboxClose" alt="Close dialog"></i>
                            <div class="lightboxTitle"></div>
                        </div>`
        dom.querySelector('.lightboxClose').addEventListener('click', this.close.bind(this))
        dom.querySelector('.fas.fa-chevron-right').addEventListener('click', this.next.bind(this))
        dom.querySelector('.fas.fa-chevron-left').addEventListener('click', this.prev.bind(this))
        return dom
    }

}