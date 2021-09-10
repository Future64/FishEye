import { createDomElement } from './tools.js'
import { Lightbox } from './lightbox.js'


// Fonction qui créer et affiche les médias de la page photographe
export const createMedia = (dataMedia, urlImage, urlVideo) => {

    // Creation des DomElements et des classes pour les DomElements
    const mediaZoneContainer = document.querySelector(".mediaZoneContainer")

    const mediaZone = createDomElement("mediaZone", "div")
    const mediaCard = createDomElement("mediaCard", "div")
    const mediaLink = createDomElement("mediaLink", "a")
    const mediaImage = createDomElement("mediaImage", "img")
    const mediaVideo = createDomElement("mediaImage", "video")
    const mediaInfo = createDomElement("mediaInfo", "div")
    const mediaTitle = createDomElement("mediaTitle", "h2")
    const mediaPrice = createDomElement("mediaPrice", "span")
    const mediaLike = createDomElement("mediaLike", "div")
    const mediaNbLike = createDomElement("mediaNbLike", "span")
    const mediaHeart = createDomElement("far", "i")

    // texte alternatif pour les media
    const alt = dataMedia.alt

    // Ajout de class
    mediaHeart.classList.add("fa-heart", "like");

    // Affichage par defaut
    mediaHeart.style.display = 'block'

    // Afficher les informations dans les DomElements
    mediaTitle.innerHTML = dataMedia.title
    mediaPrice.innerHTML = dataMedia.price + " €"
    mediaNbLike.innerHTML = dataMedia.likes

    // Attacher les DomElements entre eux
    mediaZoneContainer.append(mediaZone)
    mediaZone.append(mediaCard)
    mediaCard.append(mediaLink)
    mediaCard.append(mediaInfo)


    // Ajout d'atributs
    if (urlImage === undefined) {
        mediaVideo.setAttribute("src", urlVideo)
        mediaVideo.setAttribute("type", "video/mp4")
        mediaVideo.setAttribute("alt", alt)
        mediaVideo.controls = true
        mediaLink.append(mediaVideo)
    } else {
        mediaImage.setAttribute("src", urlImage)
        mediaImage.setAttribute("alt", alt)
        mediaLink.append(mediaImage)
    }

    mediaInfo.append(mediaTitle)
    mediaInfo.append(mediaLike)
    mediaLike.append(mediaPrice)
    mediaLike.append(mediaNbLike)
    mediaLike.append(mediaHeart)


    Lightbox.init()

}