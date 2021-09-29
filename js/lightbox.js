import { enableBodyScroll, disableBodyScroll } from './body-scroll-lock.js'

/**
 * @property {HTMLElement} element
 * @property {string[]} uri Chemins des uri de la lightbox
 * @property {string} url Media actuellement affichée
 **/
export class Lightbox {

    /**
     * @param {string} url URL du media
     * @param {string[]} uri Chemins des uri de la lightbox
     */
    constructor(url, uri) {
        this.data = JSON.parse(localStorage.getItem('data'))
        this.lightboxMain = document.body.querySelector(".lightbox-main")
        this.element = this.buildDOM(url)
        this.uri = uri
        this.loadImage(url)
        this.onKeyUp = this.onKeyUp.bind(this)
        this.lightboxMain.appendChild(this.element)
        disableBodyScroll(this.element)
        document.addEventListener('keyup', this.onKeyUp)
    }

    static init() {
        const links = Array.from(document.querySelectorAll('img[src$=".jpg"], video[src$=".mp4"]'))
        const gallery = links.map(link => link.getAttribute('src'))
        links.KeyPreview = true;

        links.forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault()
                new Lightbox(e.currentTarget.getAttribute('src'), gallery)
            })

            link.addEventListener('keyup', (event) => {
                if (event.key === "Enter") {
                    new Lightbox(event.currentTarget.getAttribute('src'), gallery)
                }
            })
        })
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
        const lightboxTitle = this.element.querySelector('.lightboxTitle')
        const img = document.createElement('img')
        const video = document.createElement('video')

        const splitUrl = this.url.split('/')
        const mediaName = splitUrl[splitUrl.length - 1];
        let metaMedia = null

        this.data.media.forEach(media => {
            if (media.image == mediaName) {
                metaMedia = media
            }
        });

        container.innerHTML = ''

        if (this.getFileExtension(url) === "jpg") {
            img.classList.add('lightboxImg')
            img.setAttribute("src", url)
            container.appendChild(img)
            img.onload = () => { this.url = url }

            this.data.media.forEach(media => {
                if (media.image == mediaName) {
                    metaMedia = media
                }
            });
        } else {
            video.classList.add('lightboxVideo')
            video.setAttribute("src", url)
            video.setAttribute("type", "video/mp3")
            video.controls = true
            container.appendChild(video)
            video.onload = () => { this.url = url }
            this.data.media.forEach(media => {
                if (media.video == mediaName) {
                    metaMedia = media
                }
            });
        }

        lightboxTitle.innerHTML = metaMedia.title

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
        let i = this.uri.findIndex(media => media === this.url)
        if (i === this.uri.length - 1) {
            i = -1
        }
        this.loadImage(this.uri[i + 1])
    }

    /**
     * @param {MouseEvent|KeyboardEvent} e 
     */
    prev(e) {
        e.preventDefault()
        let i = this.uri.findIndex(media => media === this.url)
        if (i === 0) {
            i = this.uri.length
        }
        this.loadImage(this.uri[i - 1])
    }

    /**
     * @param {string} url URL de l'image
     * @return {HTMLElement}
     */
    buildDOM(url) {
        const dom = document.createElement('div')
        dom.classList.add('lightboxPage')
        dom.innerHTML = `<div class="lightboxContainer" aria-label="image closeup view">
                            <button type="button" class="btnLightboxFAS">
                                <i class="fas fa-chevron-left btnLightbox" alt="Previous image"></i>
                            </button>
                            <div class="lightboxImgContainer"></div>
                            <button type="button" class="btnLightboxFAS">
                                <i class="fas fa-chevron-right btnLightbox" alt="Next image"></i>
                            </button>
                            <i class="fas fa-times lightboxClose" alt="Close dialog"></i>
                            <div class="lightboxTitleContainer">
                                <div class="lightboxTitle"></div>
                            </div>
                        </div>`
        dom.querySelector('.lightboxClose').addEventListener('click', this.close.bind(this))
        dom.querySelector('.fas.fa-chevron-right').addEventListener('click', this.next.bind(this))
        dom.querySelector('.fas.fa-chevron-left').addEventListener('click', this.prev.bind(this))
        return dom
    }

}